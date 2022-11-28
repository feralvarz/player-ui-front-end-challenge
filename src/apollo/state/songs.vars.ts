import { ActiveTrackInfo, Song } from '$/models/Song/Song.types';
import { makeVar } from '@apollo/client';

export const activeTrack = makeVar<ActiveTrackInfo | null>(null);
export const favorites = makeVar<number[]>([]);

//TODO: review this implementation
export const tracksList = makeVar<Song[]>([]);
