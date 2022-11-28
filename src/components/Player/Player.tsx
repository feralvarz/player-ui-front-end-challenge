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

const Player: FC<PlayerProps> = ({ tracks }) => {
  const { track, autoHide, handlers, playing } = usePlayer({
    tracks,
  });

  if (!track) {
    return null;
  }

  return (
    <HoverTrap active={autoHide}>
      <PlayerContainer>
        <TrackThumbnail
          trackName={track.name}
          artist={track.author.name}
          image={track.image}
        />
        <PlayerControls>
          <Control
            onClick={() => handlers.handleRestartTime()}
            onDoubleClick={handlers.handlePrevious}
          >
            <Previous />
          </Control>
          <Control solid onClick={handlers.handleTogglePlay}>
            {playing && <Pause />}
            {!playing && <Play />}
          </Control>
          <Control flip onClick={handlers.handleNext}>
            <Previous />
          </Control>
        </PlayerControls>
        <TrackProgress onSlideChange={handlers.handleUpdateCurrentTime} />
      </PlayerContainer>
    </HoverTrap>
  );
};

export default Player;
