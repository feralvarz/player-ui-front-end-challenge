import Pause from '$/assets/icons/pause.svg';
import Play from '$/assets/icons/play-large.svg';
import Previous from '$/assets/icons/previous.svg';
import { TrackProgress } from '$/components/TrackProgress/TrackProgress';
import { TrackThumbnail } from '$/components/TrackThumbnail/TrackThumbnail';
import { FC, useEffect, useState } from 'react';

import {
  Control,
  HoverTrap,
  PlayerContainer,
  PlayerControls,
} from './Player.styles';

// type PlayerProps  = {}

const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoHide, setAutoHide] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      setAutoHide(true);
      const autoHideTimeout = setTimeout(() => {
        setAutoHide(false);
        clearTimeout(autoHideTimeout);
      }, 5000);
    }
  }, [isPlaying]);

  return (
    <HoverTrap active={autoHide}>
      <PlayerContainer>
        <TrackThumbnail
          trackName="One"
          artist="Metallica"
          image="https://images.unsplash.com/photo-1622977265144-83e92cf7679a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"
        />
        <PlayerControls>
          <Control onClick={() => setIsPlaying((play) => !play)}>
            <Previous />
          </Control>
          <Control solid onClick={() => setIsPlaying((play) => !play)}>
            {isPlaying && <Pause />}
            {!isPlaying && <Play />}
          </Control>
          <Control flip onClick={() => setIsPlaying((play) => !play)}>
            <Previous />
          </Control>
        </PlayerControls>
        <TrackProgress current="3:20" duration="15:22" />
      </PlayerContainer>
    </HoverTrap>
  );
};

export default Player;
