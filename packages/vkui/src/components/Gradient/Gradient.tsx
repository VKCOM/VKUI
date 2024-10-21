import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Gradient.module.css';

const modeStyles = {
  overlay: styles.modeOverlay,
  tint: styles.modeTint,
};

export interface GradientProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Тип градиента
   */
  mode?: 'tint' | 'default' | 'overlay';
  /**
   * Направление градиента
   */
  to?: 'top' | 'bottom';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Gradient
 */
export const Gradient = ({
  mode = 'default',
  to = 'top',
  ...restProps
}: GradientProps): React.ReactNode => {
  return (
    <RootComponent
      role="presentation"
      {...restProps}
      baseClassName={classNames(
        styles.host,
        mode !== 'default' && modeStyles[mode],
        to === 'bottom' && styles.toBottom,
      )}
    />
  );
};
