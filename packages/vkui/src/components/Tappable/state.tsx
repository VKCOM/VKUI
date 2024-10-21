import type { LiteralUnion } from '../../types';
import styles from './Tappable.module.css';

type StateMode = 'opacity' | 'background' | 'none';
export type StateModeLiteral = LiteralUnion<StateMode, string>;

export interface StateProps {
  /**
   * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
   */
  activeMode?: StateModeLiteral;

  /**
   * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
   */
  hoverMode?: StateModeLiteral;
}

/**
 * Состояние по умолчанию
 */
export const DEFAULT_STATE_MODE: StateMode = 'background';

const stylesHovered: Record<string, string> = {
  background: styles.hoveredBackground,
  opacity: styles.hoveredOpacity,
  none: '',
};

/**
 * Определяем класс наведения
 */
export function hoverClass(hoverMode: StateModeLiteral = DEFAULT_STATE_MODE): string {
  const presetClass = stylesHovered[hoverMode] as string | undefined;

  return presetClass !== undefined ? presetClass : hoverMode;
}

const stylesActivated: Record<string, string> = {
  background: styles.activatedBackground,
  opacity: styles.activatedOpacity,
  none: '',
};

/**
 * Определяем класс наведения
 */
export function activeClass(activeMode: StateModeLiteral = DEFAULT_STATE_MODE): string {
  const presetClass = stylesActivated[activeMode] as string | undefined;

  return presetClass !== undefined ? presetClass : activeMode;
}
