import type { FC } from 'react';

import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = (props) => (
  <Container className={props?.className || ''}>
    <SearchLineIcon />
    <Input
      name={props.name || 'generic-input'}
      label={props?.label || 'search'}
      hideLabel={true}
      placeholder={props?.placeholder}
      onKeyUp={props?.onKeyUp}
    />
  </Container>
);
