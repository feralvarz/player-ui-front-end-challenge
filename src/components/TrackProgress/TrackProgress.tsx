import { audioMeta } from '$/apollo/state/songs.vars';
import { ProgressSlider } from '$/components/ProgressSlider/ProgressSlider';
import { Text } from '$/components/Text';
import { timeFormatter } from '$/utils/formatters/timeFormatter';
import { useReactiveVar } from '@apollo/client';
import { FC } from 'react';

import { TrackProgressContainer } from './TrackProgress.styles';

type TrackProgressProps = {
  onSlideChange: (e: [number]) => void;
};

export const TrackProgress: FC<TrackProgressProps> = ({ onSlideChange }) => {
  const $audioMeta = useReactiveVar(audioMeta);

  return (
    <TrackProgressContainer>
      <Text tag="span" variant="caption" className="timeLabel">
        {timeFormatter($audioMeta.current)}
      </Text>
      <ProgressSlider trackStatus={$audioMeta} onValueChange={onSlideChange} />

      <Text tag="span" variant="caption" className="timeLabel">
        {timeFormatter($audioMeta.duration)}
      </Text>
    </TrackProgressContainer>
  );
};
