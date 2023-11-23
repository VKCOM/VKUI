import { classNames } from '@vkontakte/vkjs';
import { LiteralUnion } from '../types';
import styles from '../styles/focusVisible.module.css';

export const focusVisiblePresetModeClassNames = {
  inside: styles['-focus-visible--mode-inside'],
  outside: styles['-focus-visible--mode-outside'],
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
}: UseFocusVisibleClassNameProps) {
  const modeClassName = isPresetMode(mode) ? focusVisiblePresetModeClassNames[mode] : mode;

  const focusVisibleClassNames = classNames(
    styles['-focus-visible'],
    focusVisible && styles['-focus-visible--focused'],
    focusVisible && modeClassName,
  );

  return focusVisibleClassNames;
}
