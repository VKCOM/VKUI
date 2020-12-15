type RectOptions = { x?: number; y?: number; w?: number; h?: number };
export function mockRect(el: HTMLElement | ({} & any), { x = 0, y = 0, w = 0, h = 0 }: RectOptions) {
  if (!el) {
    return;
  }
  el.getBoundingClientRect = () => ({
    x,
    y,
    width: w,
    height: h,
    left: x,
    top: y,
    right: x + w,
    bottom: y + h,
    toJSON() {
      JSON.stringify(this);
    },
  });
}
