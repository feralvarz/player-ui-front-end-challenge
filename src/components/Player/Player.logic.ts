import {
  activeTrack,
  audioMeta,
  playerStatus,
} from '$/apollo/state/songs.vars';
import { Song } from '$/models/Song/Song.types';
import { useReactiveVar } from '@apollo/client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { PlayerProps } from './Player.types';
import { getNextIndex, getPrevIndex } from './Player.utils';

export const usePlayer = ({ tracks }: PlayerProps) => {
  const [trackReady, setTrackReady] = useState(false);
  const [autoHide, setAutoHide] = useState(false);

  const $playerStatus = useReactiveVar(playerStatus);
  const { playing, index } = $playerStatus;

  const track = useMemo(() => {
    const result = (tracks[$playerStatus.index] as Song) || null;
    // Sometimes, after a search tracks & index doesn't match.
    // in this case we're going to keep playing from stored state.
    if (!result) {
      return activeTrack();
    }
    return result;
  }, [tracks, $playerStatus]);

  const audioPlayerRef = useRef(new Audio(track?.audio.url));

  const handleTogglePlay = useCallback(() => {
    playerStatus({
      ...playerStatus(),
      playing: !playerStatus().playing,
    });
  }, []);

  const handlePrevious = useCallback(() => {
    const newIndex = getPrevIndex(tracks, index);

    playerStatus({
      playing: true,
      index: newIndex,
    });
  }, [index, tracks]);

  const handleNext = useCallback(() => {
    const newIndex = getNextIndex(tracks, index);

    playerStatus({
      playing: true,
      index: newIndex,
    });
  }, [index, tracks]);

  const handleUpdateCurrentTime = useCallback(([progress]: [number]) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = progress;

      const update = {
        ...audioMeta(),
        current: audioPlayerRef.current?.currentTime || 0,
      };
      audioMeta(update);
    }
  }, []);

  const handleRestartTime = useCallback(() => {
    audioPlayerRef.current.currentTime = 0;
    const update = {
      ...audioMeta(),
      current: 0,
    };
    audioMeta(update);
  }, []);

  const handleOnTimeUpdate = useCallback(() => {
    const update = {
      ...audioMeta(),
      current: audioPlayerRef.current?.currentTime || 0,
    };

    return audioMeta(update);
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    const { duration } = audioPlayerRef.current;

    audioMeta({
      current: 0,
      duration: duration,
    });
    setTrackReady(true);
  }, []);

  // Main Actions after a global track index change
  useEffect(() => {
    setTrackReady(false);
    audioPlayerRef.current.pause();
    audioPlayerRef.current.preload = 'metadata';
    audioPlayerRef.current = new Audio(track?.audio.url);
    audioPlayerRef.current.addEventListener(
      'loadedmetadata',
      handleLoadedMetadata,
    );

    audioPlayerRef.current.addEventListener('timeupdate', handleOnTimeUpdate);

    return () => {
      audioPlayerRef.current.pause();
      audioPlayerRef.current.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata,
      );
      audioPlayerRef.current.removeEventListener(
        'timeupdate',
        handleOnTimeUpdate,
      );
    };
  }, [index, handleLoadedMetadata, handleOnTimeUpdate, track]);

  useEffect(() => {
    if (trackReady) {
      if ($playerStatus.playing) {
        // Mark a promise as intentionally not awaited
        void audioPlayerRef.current.play();

        setAutoHide(true);
        const autoHideTimeout = setTimeout(() => {
          setAutoHide(false);
          clearTimeout(autoHideTimeout);
        }, 5000);
      } else {
        audioPlayerRef.current.pause();
      }
    }

    return () => {
      audioPlayerRef.current.pause();
    };
  }, [trackReady, $playerStatus]);

  return {
    track,
    audioPlayerRef,
    autoHide,
    playing,
    handlers: {
      handleNext,
      handleOnTimeUpdate,
      handlePrevious,
      handleRestartTime,
      handleTogglePlay,
      handleUpdateCurrentTime,
    },
  };
};
