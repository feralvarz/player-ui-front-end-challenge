import React from 'react';

import { Component, Container, Label } from './styles';
import { Props } from './types';

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, label, name, hideLabel = false, disabled = false, ...props },
    ref,
  ) => (
    <Container className={className} $disabled={disabled}>
      <Label htmlFor={name} $visuallyHidden={hideLabel}>
        {label}
      </Label>
      <Component
        {...props}
        ref={ref}
        id={name}
        name={name}
        disabled={disabled}
      />
    </Container>
  ),
);

Input.displayName = 'Input';
