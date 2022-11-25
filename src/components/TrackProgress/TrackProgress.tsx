import { AudioMeta } from '$/components/Player/Player.types';
import { ProgressSlider } from '$/components/ProgressSlider/ProgressSlider';
import { Text } from '$/components/Text';
import { timeFormatter } from '$/utils/formatters/timeFormatter';
import { FC } from 'react';

import { TrackProgressContainer } from './TrackProgress.styles';

type TrackProgressProps = {
  trackStatus: AudioMeta;
  onSlideChange: (e: [number]) => void;
};

export const TrackProgress: FC<TrackProgressProps> = ({
  trackStatus,
  onSlideChange,
}) => (
  <TrackProgressContainer>
    <Text tag="span" variant="caption" className="timeLabel">
      {timeFormatter(trackStatus?.current)}
    </Text>
    <ProgressSlider trackStatus={trackStatus} onValueChange={onSlideChange} />

    <Text tag="span" variant="caption" className="timeLabel">
      {timeFormatter(trackStatus?.duration)}
    </Text>
  </TrackProgressContainer>
);
