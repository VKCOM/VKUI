let supported, prefix;

if (typeof document !== 'undefined' && document.createElement) {
  const d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) prefix = m[1];
  }
}

export default { supported, prefix };
