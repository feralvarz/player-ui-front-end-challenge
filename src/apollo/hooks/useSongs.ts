import { SONGS_QUERY } from '$/apollo/queries/songs';
import { tracks } from '$/apollo/state/songs.vars';
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

  const normalizedSongs = useMemo(() => data?.songs.songs || [], [data]);
  tracks(normalizedSongs);

  return {
    songs: normalizedSongs,
    songsError,
    songsLoading,
    refetchSongs,
  };
};
