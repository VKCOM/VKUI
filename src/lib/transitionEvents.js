let supported, prefix;

if (typeof document !== 'undefined' && document.createElement) {
  const d = document.createElement('div');

  for (let i in d.style) {
    let m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) {
      // согласно спецификации, префиксы к событиям должны быть в нижнем регистре
      // https://www.w3schools.com/jsref/event_transitionend.asp
      prefix = m[1].toLowerCase();
    }
  }
}

export default { supported, prefix };
