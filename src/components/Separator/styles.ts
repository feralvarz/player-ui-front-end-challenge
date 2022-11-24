import styled from 'styled-components';

import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${({ options, theme }) =>
    options.showDecoration &&
    `
    height: 1.5rem;
    background-image: radial-gradient(
    ${theme.color.grayscale200} 1px,
    transparent 1px
  );
  background-repeat: repeat-x;
  background-position: -4px 50%;
  background-size: 1rem 1rem;

  `}

  margin-block-start: ${({ options }) => options.spaceBlockStart};
  margin-block-end: ${({ options }) => options.spaceBlockEnd};
`;
