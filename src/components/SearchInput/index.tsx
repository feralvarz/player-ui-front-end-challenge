import type { FC } from 'react';

import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = ({
  placeholder,
  className,
  onKeyDown,
}) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input
      name="search"
      label="search"
      hideLabel={true}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  </Container>
);
