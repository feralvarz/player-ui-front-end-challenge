import type { KeyboardEventHandler } from 'react';

export type SearchInputProps = Partial<HTMLInputElement> & {
  label?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
};
