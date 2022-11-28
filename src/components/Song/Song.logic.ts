import {
  activeTrack,
  favorites,
  playerStatus,
} from '$/apollo/state/songs.vars';
import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';

import { SongItemProps } from './Song';

export const useSongLogic = ({ song, index }: SongItemProps) => {
  const $playerStatus = useReactiveVar(playerStatus);
  const $favorites = useReactiveVar(favorites);

  const handleTogglePlayerAction = useCallback(
    (playing: boolean) => {
      if (playing) {
        activeTrack(song);
      }
      playerStatus({ playing, index });
    },
    [song, index],
  );

  const handleToggleFavorite = useCallback(() => {
    const songId = song.id;
    let update = [];
    if ($favorites.includes(songId)) {
      update = $favorites.filter((favId) => favId !== songId);
    } else {
      update = [...$favorites, songId];
    }
    window.localStorage.setItem('favTracks', JSON.stringify(update));
    favorites(update);
  }, [$favorites, song]);

  return {
    isPlaying: $playerStatus.index === index && $playerStatus.playing,
    favorite: $favorites.includes(song.id),
    handleTogglePlayerAction,
    handleToggleFavorite,
  };
};
