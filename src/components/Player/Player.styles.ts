import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: grid;
  min-width: 790px;
  gap: 13.5%;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 16px 24px;
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.color.grayscale900};
  box-shadow: 0 -2px 8px rgba(34, 34, 61, 0.1);
  border-radius: 16px 16px 0 0;
`;

export const PlayerControls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  place-items: center;
  gap: 8px;
  max-width: 136px;
  margin: 0 auto;
`;

export const Control = styled.button<{ solid?: boolean; flip?: boolean }>`
  all: unset;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  ${({ solid }) =>
    solid &&
    `
  background-color: white;
  border-radius: 50%;
  `}
  ${({ flip }) =>
    flip &&
    `
  rotate: -180deg;
  `}
`;