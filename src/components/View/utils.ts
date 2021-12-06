import { TouchEvent } from "../Touch/Touch";

const swipeBackExcludedSelector =
  "input, textarea, [data-vkui-swipe-back=false]";

export function swipeBackExcluded(e: TouchEvent) {
  const target = e.originalEvent.target as HTMLElement;
  return Boolean(target?.closest(swipeBackExcludedSelector));
}
