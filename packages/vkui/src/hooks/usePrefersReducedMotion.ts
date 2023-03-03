import { useDOM } from '../lib/dom';

export function usePrefersReducedMotion() {
  const { window } = useDOM();

  // Grab the prefers-reduced-motion query
  return !window?.matchMedia('(prefers-reduced-motion: no-preference)');
}
