export type SeparatorProps = {
  spaceBlockStart?: string;
  spaceBlockEnd?: string;
  showDecoration?: boolean;
  className?: string;
  px?: boolean;
};

export type ContainerProps = {
  options: Omit<SeparatorProps, 'className'>;
};
