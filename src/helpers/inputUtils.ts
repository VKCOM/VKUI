import { IS_PLATFORM_IOS } from '../lib/platform';

let hasMouse: boolean;
let hasTouchEvents: boolean;
let hasHover: boolean;
let hasTouch: boolean;

if (IS_PLATFORM_IOS) {
  hasMouse = false;
  hasHover = false;
  hasTouchEvents = true;
  hasTouch = true;
} else {
  hasTouchEvents = 'ontouchstart' in document;
  hasTouch = hasTouchEvents
    || 'maxTouchPoints' in navigator
    && navigator.maxTouchPoints > 0;

  if (hasTouchEvents) {
    hasMouse = window.matchMedia && matchMedia('(any-pointer)').matches
      ? matchMedia('(any-pointer: fine)').matches
      : /android|mobile|tablet/i.test(navigator.userAgent);

    hasHover = hasMouse && (
      window.matchMedia && matchMedia('(hover)').matches
        ? matchMedia('(hover: hover)').matches
        : false
    );
  } else {
    hasMouse = true;
    hasHover = true;
  }
}

export { hasMouse, hasHover, hasTouchEvents, hasTouch };
