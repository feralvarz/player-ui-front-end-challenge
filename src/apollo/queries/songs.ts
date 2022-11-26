import { gql } from '@apollo/client';

export const SONGS_QUERY = gql`
  query GetSong(
    $pagination: PaginationInput
    $search: String
    $sort: SortInput
  ) {
    songs(pagination: $pagination, search: $search, sort: $sort) {
      songs {
        id
        name
        author {
          name
        }
        description
        audio {
          id
          url
          autoPlay
        }
        genre
        image
      }
    }
  }
`;
