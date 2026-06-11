export interface OffsetRectInterface {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function getOffsetRect(elem: HTMLElement): OffsetRectInterface {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top,
    left: box.left,
    width: elem.offsetWidth,
    height: elem.offsetHeight,
  };
}
