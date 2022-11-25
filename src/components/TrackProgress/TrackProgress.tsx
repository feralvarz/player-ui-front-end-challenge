import { ProgressSlider } from '$/components/ProgressSlider/ProgressSlider';
import { Text } from '$/components/Text';
import { FC } from 'react';

import { TrackProgressContainer } from './TrackProgress.styles';

type TrackProgressProps = {
  current: string;
  duration: string;
};

export const TrackProgress: FC<TrackProgressProps> = () => (
  <TrackProgressContainer>
    <Text tag="span" variant="caption">
      15:22
    </Text>
    <ProgressSlider />

    <Text tag="span" variant="caption">
      03:55
    </Text>
  </TrackProgressContainer>
);
