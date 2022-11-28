import { SearchInput as DefaultSearchInput } from '$/components/SearchInput';
import { from } from '$/styles/utils/responsive';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr;
`;

export const SongsScrollContainer = styled.div`
  overflow-y: auto;
  padding-bottom: 100px;
  margin: 0 -2.5rem;

  ${from['laptop']} {
    margin: 0 -6rem;
  }
`;

const aligner = css`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`;

export const SearchInput = styled(DefaultSearchInput)`
  margin-block-start: 1.25rem;
`;

export const SongsContainer = styled.div`
  display: grid;
  gap: 20px;
  ${aligner}
  padding-inline: 2.5rem;
  ${from['laptop']} {
    max-width: min(calc(100% - 12rem), 64rem);
    padding-inline: unset;
  }
`;

export const SongsHeader = styled.header`
  padding-top: 40px;
  padding-bottom: 24px;
  background: white;
  ${aligner}
`;
