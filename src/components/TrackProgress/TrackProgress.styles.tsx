import styled from 'styled-components';

export const TrackProgressContainer = styled.div`
  color: white;
  display: grid;
  width: 100%;
  gap: 16px;
  margin-left: auto;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  progress {
    width: 100%;
  }
`;
