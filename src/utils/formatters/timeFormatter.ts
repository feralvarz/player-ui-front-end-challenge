export const timeFormatter = (value: number): string => {
  const formatter = new Intl.DateTimeFormat('es-ES', {
    minute: '2-digit',
    second: '2-digit',
  });

  return value ? formatter.format(value * 1000) : '00:00';
};
