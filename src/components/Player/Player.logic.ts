import { useCallback, useEffect, useRef, useState } from 'react';

import { AudioMeta, PlayerProps } from './Player.types';

export const usePlayer = ({ activeTrack }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoHide, setAutoHide] = useState(false);
  const [audioMeta, setAudioMeta] = useState<AudioMeta>({
    current: 0,
    duration: 0,
  });

  const audioPlayerRef = useRef(new Audio(activeTrack.data.audio.url));

  const handleOnUpdateTime = useCallback(() => {
    if (audioPlayerRef.current) {
      return setAudioMeta((meta) => ({
        ...meta,
        current: audioPlayerRef.current?.currentTime || 0,
      }));
    }
  }, []);

  const updateSongActions = useCallback(() => {
    const { duration } = audioPlayerRef.current;

    setAudioMeta({
      current: 0,
      duration: duration,
    });
    setIsPlaying(activeTrack.data.playing);
  }, [activeTrack]);

  useEffect(() => {
    audioPlayerRef.current.pause();
    audioPlayerRef.current.preload = 'metadata';
    audioPlayerRef.current = new Audio(activeTrack.data.audio.url);
    audioPlayerRef.current.addEventListener(
      'loadedmetadata',
      updateSongActions,
    );

    audioPlayerRef.current.addEventListener('timeupdate', handleOnUpdateTime);

    return () => {
      audioPlayerRef.current.removeEventListener(
        'loadedmetadata',
        updateSongActions,
      );
      audioPlayerRef.current.removeEventListener(
        'timeupdate',
        handleOnUpdateTime,
      );
    };
  }, [activeTrack, updateSongActions, handleOnUpdateTime]);

  const updateCurrentTime = useCallback(([progress]: [number]) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = progress;

      setAudioMeta((meta) => ({
        ...meta,
        current: audioPlayerRef.current?.currentTime || 0,
      }));
    }
  }, []);

  const handleRestartTime = useCallback(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = 0;

      return setAudioMeta((meta) => ({
        ...meta,
        current: 0,
      }));
    }
  }, []);

  useEffect(() => {
    if (audioPlayerRef.current) {
      if (isPlaying) {
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
  }, [isPlaying]);

  return {
    audioMeta,
    audioPlayerRef,
    autoHide,
    isPlaying,
    setIsPlaying,
    handlers: {
      handleOnUpdateTime,
      updateCurrentTime,
      handleRestartTime,
    },
  };
};
