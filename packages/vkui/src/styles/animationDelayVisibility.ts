import { type CSSCustomProperties } from '../types';

export function animationDelayVisibilityStyles(
  delay: number | undefined,
): CSSCustomProperties | undefined {
  if (delay === undefined) {
    return undefined;
  }

  return {
    '--vkui_internal--animation_delay_visibility': `${delay}ms`,
  };
}
