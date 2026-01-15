import { classNames } from '@vkontakte/vkjs';
import type { LiteralUnion } from '../types';
import styles from '../styles/focusVisible.module.css';

export const focusVisiblePresetModeClassNames: Record<'inside' | 'outside', string> = {
  inside: styles.focusVisibleModeInside,
  outside: styles.focusVisibleModeOutside,
};

type FocusVisiblePresetMode = keyof typeof focusVisiblePresetModeClassNames;

export type FocusVisibleMode = LiteralUnion<FocusVisiblePresetMode, string>;

const isPresetMode = (mode: FocusVisibleMode): mode is FocusVisiblePresetMode =>
  mode === 'inside' || mode === 'outside';

export interface FocusVisibleModeProps {
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible
   */
  focusVisibleMode?: FocusVisibleMode;
}

export interface UseFocusVisibleClassNameProps {
  focusVisible?: boolean;
  mode?: FocusVisibleMode;
}

/**
 * Используется для проброса классов состояния :focus-visible в компонент.
 *
 * Рулит исключительно классами. Чтобы определить, есть ли фокусное состояние,
 * используйте хуки `useFocusVisible()` и `useFocusWithin()`.
 */
export function useFocusVisibleClassName({
  focusVisible = false,
  mode = 'inside',
}: UseFocusVisibleClassNameProps): string {
  const modeClassName = isPresetMode(mode) ? focusVisiblePresetModeClassNames[mode] : mode;

  const focusVisibleClassNames = classNames(
    styles.focusVisible,
    focusVisible && styles.focusVisibleFocused,
    focusVisible && modeClassName,
  );

  return focusVisibleClassNames;
}
