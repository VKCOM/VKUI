import { PREFERS_REDUCED_MOTION_MEDIA_QUERY } from '../lib/accessibility';
import { mediaQueryNull } from '../lib/browser';
import { useDOM } from '../lib/dom';

export const usePrefersReducedMotion = () => {
  const { window } = useDOM();
  const matchMedia = window ? window.matchMedia.bind(window) : mediaQueryNull;

  // eslint-disable-next-line no-restricted-properties
  return matchMedia(PREFERS_REDUCED_MOTION_MEDIA_QUERY).matches;
};
