export const capitalize = (text: string) => {
  if (text.length <= 1) return text;
  return text.charAt(0).toUpperCase() + text.substring(1);
};
