import styled from 'styled-components';

export const SongCard = styled.article`
  display: grid;
  gap: 32px;
  grid-template-columns: 140px 1fr;
`;

export const AlbumArt = styled.picture<{ url: string }>`
  width: 140px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  background: ${(props) => `url(${props.url}) center / cover no-repeat`};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 74.56% 1fr;
  align-items: center;
`;

export const CardFooter = styled.footer`
  padding-top: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const FavoriteSelector = styled.button`
  all: unset;
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

export const MultilineEllipsis = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const PlayButton = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const Tag = styled.div`
  border-radius: 47px;
  padding: 4px 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.malibu100};
`;
