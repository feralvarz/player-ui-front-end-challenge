import ClientOnly from '$/components/ClientOnly/ClientOnly';
import Player from '$/components/Player/Player';
import { Separator } from '$/components/Separator';
import { SongItem } from '$/components/Song/Song';
import { Text } from '$/components/Text';
import { FC } from 'react';

import { useHomeLogic } from './Home.logic';
import { Container, SearchInput, SongsContainer, SongsHeader } from './styles';

export const HomeView: FC = () => {
  const { songs, handleSearch } = useHomeLogic();

  return (
    <Container>
      <SongsHeader>
        <Text tag="h1" variant="title1">
          Explore
        </Text>
        <SearchInput
          placeholder="Search by title, genre..."
          onKeyDown={handleSearch}
        />
        <Separator px spaceBlockStart="40" />
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
      </SongsHeader>
      <ClientOnly>
        <SongsContainer>
          {songs.map((s) => (
            <SongItem key={s.id} song={s} />
          ))}
        </SongsContainer>
      </ClientOnly>
      <Player />
    </Container>
  );
};
