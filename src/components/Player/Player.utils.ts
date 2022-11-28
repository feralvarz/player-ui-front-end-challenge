import { Song } from '$/models/Song/Song.types';

export const getNextIndex = (tracks: Song[], index: number): number => {
  if (tracks.length > 1) {
    if (index === tracks.length - 1) {
      return 0;
    }

    return index + 1;
  }

  return 0;
};

export const getPrevIndex = (tracks: Song[], index: number): number => {
  if (tracks.length > 1) {
    if (index === 0) {
      return tracks.length - 1;
    }

    return index - 1;
  }

  return 0;
};
