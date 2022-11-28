import { songsMock } from '$/models/Song/Song.mocks';

import { getNextIndex, getPrevIndex } from './Player.utils';

describe('Prev index tests', () => {
  it('Should get the previous index, for first index', () => {
    const result = getPrevIndex(songsMock, 0);
    expect(result).toEqual(4);
  });

  it('Should get the previous index, for last index', () => {
    const result = getPrevIndex(songsMock, 4);
    expect(result).toEqual(3);
  });

  it('Should get the previous index, for any other index', () => {
    const result = getPrevIndex(songsMock, 2);
    expect(result).toEqual(1);
  });

  it('Should work even without enough results', () => {
    const result = getPrevIndex(songsMock.slice(0, 1), 0);
    const result2 = getPrevIndex(songsMock.slice(0, 2), 0);

    expect(result).toEqual(0);
    expect(result2).toEqual(1);
  });
});

describe('Next index tests', () => {
  it('Should get the next index, for first index', () => {
    const result = getNextIndex(songsMock, 0);
    expect(result).toEqual(1);
  });

  it('Should get the next index, for last index', () => {
    const result = getNextIndex(songsMock, 4);
    expect(result).toEqual(0);
  });

  it('Should get the next index, for any other index', () => {
    const result = getNextIndex(songsMock, 2);
    expect(result).toEqual(3);
  });

  it('Should work even without enough results', () => {
    const result = getNextIndex(songsMock.slice(0, 1), 0);
    const result2 = getNextIndex(songsMock.slice(0, 2), 1);
    expect(result).toEqual(0);
    expect(result2).toEqual(0);
  });
});
