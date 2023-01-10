import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { Platform } from '../../lib/platform';
import { TappableProps, Tappable } from '../Tappable/Tappable';
import { HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import styles from './Button.module.css';

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link';
  appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | 'accent-invariable';
  size?: 's' | 'm' | 'l';
  stretched?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  loading?: boolean;
}

export interface ButtonProps extends Omit<TappableProps, 'size'>, VKUIButtonProps {}

/**
 * @see https://vkcom.github.io/VKUI/#/Button
 */
export const Button = ({
  size = 's',
  mode = 'primary',
  appearance = 'accent',
  stretched = false,
  align = 'center',
  children,
  before,
  after,
  getRootRef,
  Component = 'button',
  loading,
  onClick,
  stopPropagation = true,
  className,
  ...restProps
}: ButtonProps) => {
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      hoverMode={styles['Button--hover']}
      activeMode={styles['Button--active']}
      {...restProps}
      Component={restProps.href ? 'a' : Component}
      onClick={loading ? undefined : onClick}
      focusVisibleMode="outside"
      stopPropagation={stopPropagation}
      className={classNames(
        className,
        styles.Button,
        styles[`Button--size-${size}`],
        styles[`Button--mode-${mode}`],
        styles[`Button--appearance-${appearance}`],
        styles[`Button--align-${align}`],
        getSizeYClassName(styles['Button'], sizeY),
        platform === Platform.ANDROID && styles[`Button--android`],
        platform === Platform.IOS && styles[`Button--ios`],
        stretched && styles['Button--stretched'],
        hasIcons && styles['Button--with-icon'],
        hasIconOnly && styles['Button--singleIcon'],
        loading && styles['Button--loading'],
      )}
      getRootRef={getRootRef}
    >
      {loading && <Spinner size="small" className={styles.Button__spinner} />}
      <span className={styles.Button__in}>
        {hasReactNode(before) && (
          <span
            className={styles.Button__before}
            role="presentation"
            data-testid={process.env.NODE_ENV === 'test' ? 'before' : undefined}
          >
            {before}
          </span>
        )}
        {hasReactNode(children) && (
          <span
            className={styles.Button__content}
            data-testid={process.env.NODE_ENV === 'test' ? 'children' : undefined}
          >
            {children}
          </span>
        )}
        {hasReactNode(after) && (
          <span
            className={styles.Button__after}
            role="presentation"
            data-testid={process.env.NODE_ENV === 'test' ? 'after' : undefined}
          >
            {after}
          </span>
        )}
      </span>
    </Tappable>
  );
};
