export function brToNl (str = '') {
  const regex = /<br\s*\/?>/gi;

  return str.replace(regex, '\n');
}
