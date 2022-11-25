import { useCallback, useEffect, useRef, useState } from 'react';

import { AudioMeta } from './Player.types';

export const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoHide, setAutoHide] = useState(false);
  const [audioMeta, setAudioMeta] = useState<AudioMeta>({
    current: 0,
    duration: 0,
  });

  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioPlayerRef.current) {
      const { currentTime, duration } = audioPlayerRef.current;
      setAudioMeta({
        current: currentTime,
        duration: duration,
      });
    }
  }, []);

  const updateCurrentTime = useCallback(([progress]: [number]) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.currentTime = progress;

      setAudioMeta((meta) => ({
        ...meta,
        current: audioPlayerRef.current?.currentTime || 0,
      }));
    }
  }, []);

  const handleOnUpdateTime = useCallback(() => {
    if (audioPlayerRef.current) {
      return setAudioMeta((meta) => ({
        ...meta,
        current: audioPlayerRef.current?.currentTime || 0,
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
        void audioPlayerRef.current.pause();
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
    },
  };
};
