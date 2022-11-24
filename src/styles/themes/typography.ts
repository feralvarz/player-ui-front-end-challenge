import { css } from 'styled-components';

import { pxToRem } from '../utils/responsive';

export const typography = {
  title1: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${pxToRem(36)};
    line-height: ${pxToRem(46.8)};
    letter-spacing: ${pxToRem(0.2)};
  `,
  title2: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${pxToRem(28)};
    line-height: ${pxToRem(33.6)};
    letter-spacing: ${pxToRem(0.2)};
  `,
  body: css`
    font-feature-settings: 'tnum' on, 'lnum' on;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(24)};
  `,
  bodyBold: css`
    font-feature-settings: 'tnum' on, 'lnum' on;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(24)};
    font-weight: ${({ theme }) => theme.weight.bold};
  `,
  body2Medium: css`
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(20)};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-feature-settings: 'tnum' on, 'lnum' on;
  `,
  body2: css`
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(20)};
    font-feature-settings: 'tnum' on, 'lnum' on;
  `,
  caption: css`
    font-size: ${pxToRem(12)};
    line-height: 1;
  `,
  captionBold: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${pxToRem(12)};
    line-height: 1;
  `,
};
