export function getOffsetRect (elem) {
  const box = elem.getBoundingClientRect();
  const body = document.body;
  const doc = document.documentElement;
  const scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  const clientTop = doc.clientTop || body.clientTop || 0;
  const clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}
