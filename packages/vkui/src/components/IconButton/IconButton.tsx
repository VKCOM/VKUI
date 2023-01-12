import * as React from 'react';
import { TappableProps, Tappable } from '../Tappable/Tappable';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import styles from './IconButton.module.css';

export interface IconButtonProps extends TappableProps {
  children?: React.ReactNode;
}

const warn = warnOnce('IconButton');

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
export const IconButton = ({
  children,
  Component = 'button',
  className,
  ...restProps
}: IconButtonProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  if (process.env.NODE_ENV === 'development' && !restProps['aria-label']) {
    warn(COMMON_WARNINGS.a11y['button-name'], 'error');
  }

  return (
    <Tappable
      activeEffectDelay={200}
      activeMode="background"
      {...restProps}
      Component={restProps.href ? 'a' : Component}
      className={classNames(
        styles['IconButton'],
        getSizeYClassName(styles['IconButton'], sizeY),
        platform === Platform.IOS && styles['IconButton--ios'],
        className,
      )}
    >
      {children}
    </Tappable>
  );
};
