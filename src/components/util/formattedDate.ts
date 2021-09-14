export const formattedDate = (str: string) => {
  const [date = '', time = ''] = str.split('T');
  return `${date} ${time.slice(0, 5)}`;
};
