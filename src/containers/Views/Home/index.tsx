import { Separator } from '$/components/Separator';
import { SongItem } from '$/components/Song/Song';
import { Text } from '$/components/Text';
import { Song } from '$/models/Song/Song.types';

import { Container, SearchInput, SongsContainer, SongsHeader } from './styles';

type SongResponse = {
  data: {
    songs: {
      songs: Song[];
    };
  };
};

const response: SongResponse = {
  data: {
    songs: {
      songs: [
        {
          id: 3,
          name: 'Casey Webb',
          author: {
            name: 'Christina Mendoza',
          },
          description:
            'Issue their movement three Republican left. Account response visit.\nBest wait myself long war area knowledge southern. Oil sell report not past.',
          audio: {
            id: 3,
            url: 'https://d2s139ebbsksc4.cloudfront.net/AcousticRock.mp3',
            autoPlay: false,
          },
          genre: 'ELECTRONIC_ROCK',
          image:
            'https://images.unsplash.com/photo-1622977265144-83e92cf7679a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
        },
        {
          id: 1,
          name: 'Donald Burke',
          author: {
            name: 'Micheal Cherry',
          },
          description:
            'Office second prove whole seven. Lay artist industry tend win environmental particularly Democrat.',
          audio: {
            id: 1,
            url: 'https://d2s139ebbsksc4.cloudfront.net/CryinInMyBeer.mp3',
            autoPlay: false,
          },
          genre: 'POST_BOP',
          image:
            'https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
        },
        {
          id: 0,
          name: 'James Eaton',
          author: {
            name: 'Heather Evans',
          },
          description:
            'Human amount heart relate challenge capital after. Stage then conference figure believe establish. Eye provide total instead American.',
          audio: {
            id: 0,
            url: 'https://d2s139ebbsksc4.cloudfront.net/Limosine.mp3',
            autoPlay: true,
          },
          genre: 'ITALO_DISCO',
          image:
            'https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
        },
        {
          id: 2,
          name: 'Sean Stewart',
          author: {
            name: 'Derek Orr',
          },
          description:
            'Fact fact morning science whole teach color letter.\nCold conference door speak me cup. Cold plan reason idea lot necessary. Local Democrat mention husband.',
          audio: {
            id: 2,
            url: 'https://d2s139ebbsksc4.cloudfront.net/AcousticMeditation2.mp3',
            autoPlay: true,
          },
          genre: 'DRUMSTEP',
          image:
            'https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY2MjEwOTczMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
        },
      ],
    },
  },
};

function HomeView(): JSX.Element {
  return (
    <Container>
      <SongsHeader>
        <Text tag="h1" variant="title1">
          Explore
        </Text>
        <SearchInput placeholder="Search by title, genre..." />
        <Separator px spaceBlockStart="40" />
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
      </SongsHeader>
      <SongsContainer>
        {response.data.songs.songs.map((s) => (
          <SongItem key={s.id} song={s} />
        ))}
      </SongsContainer>
    </Container>
  );
}

export default HomeView;
