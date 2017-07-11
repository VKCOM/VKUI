const KEBAB_RE = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const kebabCase = s => s.replace(KEBAB_RE, m => '-' + m.toLowerCase());
const processValue = val => val + (typeof val === 'number' ? 'px' : '');

function processStyles(input) {
  return typeof input !== 'string' ? Object.keys(input).reduce(function(acc, key) {
    return acc + kebabCase(key) + ':' + processValue(input[key]) + ';';
  }, '') : input;
}

export default function style(input) {
  return process.env.VKUI_RENDERER === 'preact' ? processStyles(input) : input;
}
