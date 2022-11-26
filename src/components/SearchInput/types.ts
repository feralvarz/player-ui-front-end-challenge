import type { KeyboardEventHandler } from 'react';

export type SearchInputProps = {
  placeholder?: string;
  className?: string;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};
