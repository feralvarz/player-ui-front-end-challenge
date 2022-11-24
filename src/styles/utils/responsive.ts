import { keysOf } from '$/utils/keysOf';

export const rootFontSize = 16;

export const sizes = {
  mobile: 480,
  tabletPortrait: 767,
  tabletLandscape: 960,
  laptop: 1200,
  desktop: 1800,
};

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`;

export const from = keysOf(sizes).reduce(
  (
    acc: {
      [index: string]: string;
    },
    key: keyof typeof sizes,
  ) => ({
    ...acc,
    [key]: minWidthQuery(sizes[key]),
  }),
  {},
);

export const pxToRem = (value: number) => `${value / rootFontSize}rem`;
