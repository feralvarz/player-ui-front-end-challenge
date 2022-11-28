import ClientOnly from '$/components/ClientOnly/ClientOnly';
import Player from '$/components/Player/Player';
import { Separator } from '$/components/Separator';
import { SongItem } from '$/components/Song/Song';
import { Text } from '$/components/Text';
import { randomID } from '$/utils/randomId/randomId';
import { FC } from 'react';

import { useHomeLogic } from './Home.logic';
import {
  Container,
  SearchInput,
  SongsContainer,
  SongsHeader,
  SongsScrollContainer,
} from './styles';

export const HomeView: FC = () => {
  const { songs, $tracks, handleSearch } = useHomeLogic();

  return (
    <Container id="Home-container">
      <SongsHeader>
        <Text tag="h1" variant="title1">
          Explore
        </Text>
        <SearchInput
          name="search-term-input"
          placeholder="Search by title, genre..."
          onKeyUp={handleSearch}
        />
        <Separator px spaceBlockStart="40" />
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
      </SongsHeader>
      <ClientOnly>
        <SongsScrollContainer role="scrollbar">
          <SongsContainer>
            {songs.map((s, index) => (
              <SongItem
                key={`${randomID({ label: 'track' })}-${index}`}
                song={s}
                index={index}
              />
            ))}
          </SongsContainer>
        </SongsScrollContainer>
      </ClientOnly>
      {$tracks.length > 0 && <Player tracks={$tracks} />}
    </Container>
  );
};
