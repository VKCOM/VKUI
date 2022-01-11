export interface OffsetRectInterface {
  top: number | undefined;
  left: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

export function getOffsetRect(elem: HTMLElement | null): OffsetRectInterface {
  const box = elem?.getBoundingClientRect();

  return {
    top: box?.top,
    left: box?.left,
    width: elem?.offsetWidth,
    height: elem?.offsetHeight,
  };
}
