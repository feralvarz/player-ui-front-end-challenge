import { SONGS_QUERY } from '$/apollo/queries/songs';
import { Song } from '$/models/Song/Song.types';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

export type SongsQueryVariables = {
  pagination: {
    offset: number;
    limit: number;
  };
  search: string;
  sort: {
    order: 'ASC' | 'DESC';
  };
};

type SongsQueryResponse = {
  songs: {
    songs: Song[];
  };
};

export const useSongs = (input: SongsQueryVariables) => {
  const {
    data,
    error: songsError,
    loading: songsLoading,
    refetch: refetchSongs,
  } = useQuery<SongsQueryResponse, SongsQueryVariables>(SONGS_QUERY, {
    variables: input,
    nextFetchPolicy: 'cache-only',
  });

  const normalizeSong = useMemo(() => data?.songs.songs || [], [data]);

  return {
    songs: normalizeSong,
    songsError,
    songsLoading,
    refetchSongs,
  };
};
