import { pxToRem } from '$/styles/utils/responsive';
import { FC } from 'react';

import { Container } from './styles';
import { SeparatorProps } from './types';

export const Separator: FC<SeparatorProps> = (props) => {
  const {
    spaceBlockStart = '0',
    spaceBlockEnd = '0',
    showDecoration = false,
    className,
    px,
  } = props;

  return (
    <Container
      className={className}
      options={{
        spaceBlockStart: px
          ? pxToRem(spaceBlockStart as unknown as number)
          : spaceBlockStart,
        spaceBlockEnd: px
          ? pxToRem(spaceBlockEnd as unknown as number)
          : spaceBlockEnd,
        showDecoration,
      }}
    />
  );
};
