export const convertBreaks = (text: string) => {
  return text.replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}
