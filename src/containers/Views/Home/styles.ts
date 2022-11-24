import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import styled from 'styled-components';

export const Container = styled.div`
  padding-block: 0 6.3rem;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.25rem;
`;

export const SongsContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const SongsHeader = styled.header`
  padding-top: 40px;
  padding-bottom: 24px;
  position: sticky;
  top: 0;
  background: white;
`;
