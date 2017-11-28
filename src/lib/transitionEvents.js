let supported, prefix;

if (typeof document !== 'undefined' && document.createElement) {
  const d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) prefix = m[1];
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function prefixify(property, { camelCase = false } = {}) {
  if (prefix) {
    return camelCase ? capitalizeFirstLetter(prefix) + capitalizeFirstLetter(property) : `-${prefix}-${property}`
  }
  return property;
}

export default { supported, prefix, prefixify };
