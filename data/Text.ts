export const abstract = (text: string) => {
  const parts = text.slice(0, 120).split(' ');
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

export const urlToHTTPS = (url) => url.replace('http://', 'https://');

export const splitTitle = (title: string) => {
  const matches = title.match(/(#\d*) - (.*)/);
  return {
    number: matches[1],
    trunkatedTitle: matches[2]
  }
}
