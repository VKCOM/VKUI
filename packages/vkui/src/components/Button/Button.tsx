import * as React from 'react';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import '../Spinner/Spinner.module.css';
import styles from './Button.module.css';

const stylesSize = {
  s: styles['Button--size-s'],
  m: styles['Button--size-m'],
  l: styles['Button--size-l'],
};

const stylesMode = {
  primary: styles['Button--mode-primary'],
  secondary: styles['Button--mode-secondary'],
  tertiary: styles['Button--mode-tertiary'],
  outline: styles['Button--mode-outline'],
  link: styles['Button--mode-link'],
};

const stylesAppearance = {
  'accent': styles['Button--appearance-accent'],
  'positive': styles['Button--appearance-positive'],
  'negative': styles['Button--appearance-negative'],
  'neutral': styles['Button--appearance-neutral'],
  'overlay': styles['Button--appearance-overlay'],
  'accent-invariable': styles['Button--appearance-accent-invariable'],
};

const stylesAlign = {
  left: styles['Button--align-left'],
  center: styles['Button--align-center'],
  right: styles['Button--align-right'],
};

const sizeYClassNames = {
  none: styles['Button--sizeY-none'],
  ['regular']: styles['Button--sizeY-regular'],
};

export interface VKUIButtonProps extends HasAlign {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link';
  appearance?: 'accent' | 'positive' | 'negative' | 'neutral' | 'overlay' | 'accent-invariable';
  size?: 's' | 'm' | 'l';
  stretched?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  loading?: boolean;
  disableSpinnerAnimation?: boolean;
  rounded?: boolean;
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
  loading,
  onClick = noop,
  className,
  disableSpinnerAnimation,
  rounded,
  ...restProps
}: ButtonProps) => {
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      hoverMode={styles['Button--hover']}
      activeMode={styles['Button--active']}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      {...restProps}
      onClick={loading ? undefined : onClick}
      className={classNames(
        className,
        styles.Button,
        stylesSize[size],
        stylesMode[mode],
        stylesAppearance[appearance],
        stylesAlign[align],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        platform === 'ios' && styles['Button--ios'],
        stretched && styles['Button--stretched'],
        hasIcons && styles['Button--with-icon'],
        hasIconOnly && !stretched && styles['Button--singleIcon'],
        loading && styles['Button--loading'],
        rounded && styles['Button--rounded'],
      )}
      getRootRef={getRootRef}
    >
      {loading && (
        <Spinner
          size="small"
          className={styles.Button__spinner}
          disableAnimation={disableSpinnerAnimation}
        />
      )}
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
