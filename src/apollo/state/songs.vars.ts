import { AudioMeta } from '$/components/Player/Player.types';
import { PlayerStatus, Song } from '$/models/Song/Song.types';
import { makeVar } from '@apollo/client';

export const tracks = makeVar<Song[]>([]);

export const playerStatus = makeVar<PlayerStatus>({
  index: 0,
  playing: false,
});

export const activeTrack = makeVar<Song | null>(null);

export const audioMeta = makeVar<AudioMeta>({
  current: 0,
  duration: 0,
});

export const favorites = makeVar<number[]>([]);
