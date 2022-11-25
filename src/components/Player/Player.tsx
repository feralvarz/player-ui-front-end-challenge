import Pause from '$/assets/icons/pause.svg';
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

const Player: FC = () => {
  const {
    audioMeta,
    audioPlayerRef,
    autoHide,
    handlers,
    isPlaying,
    setIsPlaying,
  } = usePlayer();

  return (
    <HoverTrap active={autoHide}>
      <audio
        id="audio"
        ref={audioPlayerRef}
        onTimeUpdate={handlers.handleOnUpdateTime}
      >
        <source src="https://d2s139ebbsksc4.cloudfront.net/AcousticRock.mp3" />
        Your browser does not support the <code>audio</code> element.
      </audio>
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
        <TrackProgress
          trackStatus={audioMeta}
          onSlideChange={handlers.updateCurrentTime}
        />
      </PlayerContainer>
    </HoverTrap>
  );
};

export default Player;
