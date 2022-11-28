import { ActiveTrackInfo } from '$/models/Song/Song.types';

export type AudioMeta = {
  current: number;
  duration: number;
};

export type PlayerProps = {
  activeTrack: ActiveTrackInfo;
};
