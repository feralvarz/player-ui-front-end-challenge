import Favorite from '$/assets/icons/heart-fill.svg';
import AddToFavorites from '$/assets/icons/heart-line.svg';
import Play from '$/assets/icons/play.svg';
import { Separator } from '$/components/Separator';
import { Text } from '$/components/Text';
import { Genre, Song } from '$/models/Song/Song.types';
import { FC, useState } from 'react';

import {
  AlbumArt,
  ContentGrid,
  CardFooter,
  FavoriteSelector,
  MultilineEllipsis,
  PlayButton,
  SongCard,
  Tag,
} from './Song.styles';

type SongItemProps = {
  song: Song;
};

export const SongItem: FC<SongItemProps> = ({ song }) => {
  const [favorite, setFavorite] = useState(false);

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
          <FavoriteSelector onClick={() => setFavorite((fav) => !fav)}>
            {favorite ? <Favorite /> : <AddToFavorites />}
          </FavoriteSelector>
        </ContentGrid>
        <CardFooter>
          <PlayButton>
            <Play />
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
