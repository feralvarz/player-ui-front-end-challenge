import Favorite from '$/assets/icons/heart-fill.svg';
import AddToFavorites from '$/assets/icons/heart-line.svg';
import Pause from '$/assets/icons/pause.svg';
import Play from '$/assets/icons/play.svg';
import { Separator } from '$/components/Separator';
import { Text } from '$/components/Text';
import { Genre, Song } from '$/models/Song/Song.types';
import { FC } from 'react';

import { useSongLogic } from './Song.logic';
import {
  AlbumArt,
  CardFooter,
  ContentGrid,
  FavoriteSelector,
  MultilineEllipsis,
  PlayButton,
  SongCard,
  Tag,
} from './Song.styles';

export type SongItemProps = {
  song: Song;
  index: number;
};

export const SongItem: FC<SongItemProps> = ({ song, index }) => {
  const {
    isPlaying,
    favorite,
    handleTogglePlayerAction,
    handleToggleFavorite,
  } = useSongLogic({ song, index });

  return (
    <SongCard>
      <AlbumArt url={song.image} />
      <div>
        <Text tag="h3" variant="bodyBold">
          {song.name}
        </Text>
        <Separator px spaceBlockStart="4" />
        <Text tag="h4" variant="body2Medium">
          {song.author.name}
        </Text>
        <Separator px spaceBlockStart="4" />
        <ContentGrid>
          <Text tag="p" variant="body2">
            <MultilineEllipsis>{song.description}</MultilineEllipsis>
          </Text>
          <FavoriteSelector onClick={handleToggleFavorite}>
            {favorite ? <Favorite /> : <AddToFavorites />}
          </FavoriteSelector>
        </ContentGrid>
        <CardFooter>
          <PlayButton onClick={() => handleTogglePlayerAction(!isPlaying)}>
            {!isPlaying && <Play />}
            {isPlaying && <Pause />}
          </PlayButton>
          <Text tag="span" variant="caption">
            3 min
          </Text>
          <Tag>
            <Text tag="span" variant="caption">
              {Genre[song.genre]}
            </Text>
          </Tag>
        </CardFooter>
      </div>
    </SongCard>
  );
};
