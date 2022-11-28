import { activeTrack, favorites } from '$/apollo/state/songs.vars';
import { useReactiveVar } from '@apollo/client';
import { useCallback, useMemo } from 'react';

import { SongItemProps } from './Song';

export const useSongLogic = ({ song, index }: SongItemProps) => {
  const $activeTrack = useReactiveVar(activeTrack);
  const $favorites = useReactiveVar(favorites);

  const isPlaying: boolean = useMemo(() => {
    if ($activeTrack) {
      return $activeTrack.data.id === song.id && $activeTrack.data.playing;
    }

    return false;
  }, [$activeTrack, song]);

  const handleTogglePlayerAction = useCallback(
    (playing: boolean) => {
      activeTrack({ data: { ...song, playing }, index });
    },
    [song, index],
  );

  const handleToggleFavorite = useCallback(() => {
    const songId = song.id;
    if ($favorites.includes(songId)) {
      const update = $favorites.filter((favId) => favId !== songId);
      favorites(update);
    } else {
      favorites([...$favorites, songId]);
    }
  }, [$favorites, song]);

  return {
    isPlaying,
    favorite: $favorites.includes(song.id),
    handleTogglePlayerAction,
    handleToggleFavorite,
  };
};
