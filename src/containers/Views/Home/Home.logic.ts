import { SongsQueryVariables, useSongs } from '$/apollo/hooks/useSongs';
import { tracks } from '$/apollo/state/songs.vars';
import { useReactiveVar } from '@apollo/client';
import { useCallback } from 'react';
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
  const { songs, refetchSongs } = useSongs(defaultVariables);
  const $tracks = useReactiveVar(tracks);

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

  return {
    songs,
    $tracks,
    handleSearch,
  };
};
