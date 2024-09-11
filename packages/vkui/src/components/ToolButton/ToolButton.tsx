import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  AdaptiveIconRenderer,
  type AdaptiveIconRendererProps,
} from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import styles from './ToolButton.module.css';

const stylesMode = {
  primary: styles['ToolButton--mode-primary'],
  secondary: styles['ToolButton--mode-secondary'],
  tertiary: styles['ToolButton--mode-tertiary'],
  outline: styles['ToolButton--mode-outline'],
};

const stylesAppearance = {
  accent: styles['ToolButton--appearance-accent'],
  neutral: styles['ToolButton--appearance-neutral'],
};

const stylesDirection = {
  row: styles['ToolButton--direction-row'],
  column: styles['ToolButton--direction-column'],
};

const sizeYClassNames = {
  none: styles['ToolButton--sizeY-none'],
  regular: styles['ToolButton--sizeY-regular'],
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
      hoverMode={styles['ToolButton--hover']}
      activeMode={styles['ToolButton--active']}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      className={classNames(
        className,
        styles['ToolButton'],
        rounded && getRoundedClassName(direction, hasChildren),
        hasChildren && direction === 'row' && styles['ToolButton--withFakeEndIcon'],
        stylesMode[mode],
        stylesAppearance[appearance],
        stylesDirection[direction],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    >
      <AdaptiveIconRenderer IconCompact={IconCompact} IconRegular={IconRegular} />
      {hasChildren && <span className={styles['ToolButton__text']}>{children}</span>}
    </Tappable>
  );
};

export function getRoundedClassName(
  direction: 'row' | 'column',
  hasChildren: boolean,
): string | undefined {
  switch (direction) {
    case 'row':
      return styles['ToolButton--rounded'];
    case 'column':
      return hasChildren ? undefined : styles['ToolButton--rounded'];
  }
}
