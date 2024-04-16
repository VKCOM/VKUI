import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  AdaptiveIconRenderer,
  AdaptiveIconRendererProps,
} from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { Tappable, TappableProps } from '../Tappable/Tappable';
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
  ['regular']: styles['ToolButton--sizeY-regular'],
};

export interface ToolButtonProps extends TappableProps, AdaptiveIconRendererProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  appearance?: 'accent' | 'neutral';
  direction?: 'row' | 'column';
}

/**
 * @see https://vkcom.github.io/VKUI/#/ToolButton
 */
export const ToolButton = ({
  mode = 'primary',
  appearance = 'accent',
  direction = 'row',
  onClick = noop,
  className,
  children,
  IconCompact,
  IconRegular,
  ...restProps
}: ToolButtonProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      hoverMode={styles['ToolButton--hover']}
      activeMode={styles['ToolButton--active']}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      onClick={onClick}
      className={classNames(
        className,
        styles['ToolButton'],
        stylesMode[mode],
        stylesAppearance[appearance],
        stylesDirection[direction],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    >
      <AdaptiveIconRenderer IconCompact={IconCompact} IconRegular={IconRegular} />
      {hasReactNode(children) && <span>{children}</span>}
    </Tappable>
  );
};
