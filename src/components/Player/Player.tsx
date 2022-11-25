import Pause from '$/assets/icons/pause.svg';
import Play from '$/assets/icons/play-large.svg';
import Previous from '$/assets/icons/previous.svg';
import { FC, useState } from 'react';

import { Control, PlayerContainer, PlayerControls } from './Player.styles';

// type PlayerProps  = {}

const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContainer>
      <h2>One</h2>
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
      <h2>Three</h2>
    </PlayerContainer>
  );
};

export default Player;
