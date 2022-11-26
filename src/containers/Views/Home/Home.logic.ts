import { useSongs } from '$/apollo/hooks/useSongs';
import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';

export const useHomeLogic = () => {
  const { songs, refetchSongs } = useSongs({
    search: '',
    sort: { order: 'ASC' },
    pagination: {
      offset: 0,
      limit: 10,
    },
  });

  const handleSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const input = event.target as HTMLInputElement;
      if (input.value.length === 1) {
        void refetchSongs({
          search: '',
          sort: { order: 'ASC' },
          pagination: {
            offset: 0,
            limit: 10,
          },
        });
      }

      if (['Enter', 'NumpadEnter'].includes(event.code)) {
        void refetchSongs({
          search: input.value,
          sort: { order: 'ASC' },
          pagination: {
            offset: 0,
            limit: 10,
          },
        });
      }
    },
    [refetchSongs],
  );

  return {
    songs,
    handleSearch,
  };
};
