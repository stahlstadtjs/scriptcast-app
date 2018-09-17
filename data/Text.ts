export const abstract = (text: string) => {
  const parts = text.slice(0, 500).split(' ');
  parts.pop();
  return parts.join(' ');
};

const dateStrings = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

export const formatDate = (dateTime: string) => {
  const date = new Date(dateTime);
  return `${dateStrings[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};
