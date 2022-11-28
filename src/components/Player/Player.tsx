import Pause from '$/assets/icons/pause-large.svg';
import Play from '$/assets/icons/play-large.svg';
import Previous from '$/assets/icons/previous.svg';
import { TrackProgress } from '$/components/TrackProgress/TrackProgress';
import { TrackThumbnail } from '$/components/TrackThumbnail/TrackThumbnail';
import { FC } from 'react';

import { usePlayer } from './Player.logic';
import {
  Control,
  HoverTrap,
  PlayerContainer,
  PlayerControls,
} from './Player.styles';
import { PlayerProps } from './Player.types';

const Player: FC<PlayerProps> = ({ activeTrack }) => {
  const { audioMeta, autoHide, handlers, isPlaying, setIsPlaying } = usePlayer({
    activeTrack,
  });

  return (
    <HoverTrap active={autoHide}>
      <PlayerContainer>
        <TrackThumbnail
          trackName={activeTrack.data.name}
          artist={activeTrack.data.author.name}
          image={activeTrack.data.image}
        />
        <PlayerControls>
          <Control
            onClick={() => handlers.handleRestartTime()}
            onDoubleClick={() => console.log('Go to previous song')}
          >
            <Previous />
          </Control>
          <Control solid onClick={() => setIsPlaying((play) => !play)}>
            {isPlaying && <Pause />}
            {!isPlaying && <Play />}
          </Control>
          <Control flip onClick={() => console.log('Go to Next song')}>
            <Previous />
          </Control>
        </PlayerControls>
        <TrackProgress
          trackStatus={audioMeta}
          onSlideChange={handlers.updateCurrentTime}
        />
      </PlayerContainer>
    </HoverTrap>
  );
};

export default Player;
