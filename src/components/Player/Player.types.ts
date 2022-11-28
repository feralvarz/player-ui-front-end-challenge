import { Song } from '$/models/Song/Song.types';

export type AudioMeta = {
  current: number;
  duration: number;
};

export type PlayerProps = {
  tracks: Song[];
};
