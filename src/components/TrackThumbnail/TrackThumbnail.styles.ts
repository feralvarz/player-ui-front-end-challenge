import styled from 'styled-components';

export const TrackContainer = styled.div`
  color: white;
  user-select: none;
  display: grid;
  grid-template-columns: 48px auto;
  gap: 16px;
  align-items: center;
`;

export const AlbumCover = styled.picture<{ url: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  background: ${(props) => `url(${props.url}) center / cover no-repeat`};
`;
