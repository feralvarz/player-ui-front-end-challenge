import { FC } from 'react';
import { TrackProgressContainer } from './TrackProgress.styles';

import { Text } from '$/components/Text';

type TrackProgressProps = {
  current: string;
  duration: string;
};

export const TrackProgress: FC<TrackProgressProps> = () => (
  <TrackProgressContainer>
    <Text tag="span" variant="caption">
      15:22
    </Text>
    <progress value="32" max="100" />

    <Text tag="span" variant="caption">
      03:55
    </Text>
  </TrackProgressContainer>
);
