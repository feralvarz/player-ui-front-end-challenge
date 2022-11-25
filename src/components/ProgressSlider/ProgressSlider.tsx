import { AudioMeta } from '$/components/Player/Player.types';
import * as Slider from '@radix-ui/react-slider';
import { FC } from 'react';

import { SliderContainer } from './ProgressSlider.styles';

type ProgressSliderProps = {
  trackStatus: AudioMeta;
  onValueChange: (e: [number]) => void;
};

export const ProgressSlider: FC<ProgressSliderProps> = ({
  trackStatus,
  onValueChange,
}) => {
  const { current } = trackStatus;

  return (
    <SliderContainer>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[0]}
        max={trackStatus.duration}
        value={[current]}
        step={1}
        aria-label="Track progress"
        onValueChange={onValueChange}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
    </SliderContainer>
  );
};
