'use client';

import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  AdaptiveIconRenderer,
  type AdaptiveIconRendererProps,
} from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import styles from './ToolButton.module.css';

const stylesMode = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  tertiary: styles.modeTertiary,
  outline: styles.modeOutline,
};

const stylesAppearance = {
  accent: styles.appearanceAccent,
  neutral: styles.appearanceNeutral,
};

const stylesDirection = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
};

export interface ToolButtonProps extends TappableProps, AdaptiveIconRendererProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  appearance?: 'accent' | 'neutral';
  direction?: 'row' | 'column';
  /**
   * Задаёт `50%` закругления для контейнера.
   *
   * > Note: игнорируется при `direction="column"` если передан `children`.
   */
  rounded?: boolean;
}

/**
 * Кнопки, которые используются для вызова инструмента, вставки аттачей или
 * для форматирования. Их можно использовать как кнопки для разового действия
 * или для включения/выключения режима.
 *
 * @see https://vkcom.github.io/VKUI/#/ToolButton
 */
export const ToolButton = ({
  mode = 'primary',
  appearance = 'accent',
  direction = 'row',
  className,
  children,
  IconCompact,
  IconRegular,
  rounded,
  ...restProps
}: ToolButtonProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const hasChildren = hasReactNode(children);

  return (
    <Tappable
      hoverMode={styles.hover}
      activeMode={styles.active}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      className={classNames(
        className,
        styles.host,
        rounded && getRoundedClassName(direction, hasChildren),
        hasChildren && direction === 'row' && styles.withFakeEndIcon,
        stylesMode[mode],
        stylesAppearance[appearance],
        stylesDirection[direction],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    >
      <AdaptiveIconRenderer IconCompact={IconCompact} IconRegular={IconRegular} />
      {hasChildren && <span className={styles.text}>{children}</span>}
    </Tappable>
  );
};

export function getRoundedClassName(
  direction: 'row' | 'column',
  hasChildren: boolean,
): string | undefined {
  switch (direction) {
    case 'row':
      return styles.rounded;
    case 'column':
      return hasChildren ? undefined : styles.rounded;
  }
}
