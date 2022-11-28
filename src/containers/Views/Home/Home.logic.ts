import { SongsQueryVariables, useSongs } from '$/apollo/hooks/useSongs';
import { favorites, tracks } from '$/apollo/state/songs.vars';
import { useReactiveVar } from '@apollo/client';
import { useCallback, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

const defaultVariables: SongsQueryVariables = {
  search: '',
  sort: { order: 'ASC' },
  pagination: {
    offset: 0,
    limit: 20,
  },
};

export const useHomeLogic = () => {
  const { refetchSongs, songsLoading } = useSongs(defaultVariables);
  const $tracks = useReactiveVar(tracks);

  useEffect(() => {
    const lsFavs = window.localStorage.getItem('favTracks');
    const initialFavs = lsFavs !== null ? (JSON.parse(lsFavs) as number[]) : [];
    favorites(initialFavs);
  }, []);

  const handleSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;

      if (['Enter', 'NumpadEnter'].includes(event.code)) {
        void refetchSongs({
          ...defaultVariables,
          search: input.value,
        });
      }
    },
    [refetchSongs],
  );

  const handleNoResults = useCallback(() => {
    void refetchSongs({
      ...defaultVariables,
      search: '',
    });
  }, [refetchSongs]);

  return {
    $tracks,
    showNoResults: !songsLoading && $tracks.length === 0,
    handlers: { handleSearch, handleNoResults },
  };
};
