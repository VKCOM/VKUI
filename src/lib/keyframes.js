export default function keyframes (name, obj) {
  if (!name || !obj) {
    return '';
  }

  const selectors = Object.keys(obj).map(key => {
    return key + ' {' + Object.keys(obj[key]).map(k => k + ':' + obj[key][k]).join(';') + '}';
  }).join('');

  return `@-webkit-keyframes ${name} {${selectors}} @keyframes ${name} {${selectors}}`;
}
