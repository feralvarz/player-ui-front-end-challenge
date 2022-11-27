export const randomID = (input: {
  label?: string;
  min?: number;
  max?: number;
}) => {
  const { label = 'item', min = 300, max = 1500 } = input;

  return `${label}-id-${Math.floor(Math.random() * (max - min)) + min}`;
};
