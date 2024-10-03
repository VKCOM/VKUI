'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import '../Spinner/Spinner.module.css';
import styles from './Button.module.css';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

const stylesMode = {
  primary: styles.modePrimary,
  secondary: styles.modeSecondary,
  tertiary: styles.modeTertiary,
  outline: styles.modeOutline,
  link: styles.modeLink,
};

const stylesAppearance = {
  'accent': styles.appearanceAccent,
  'positive': styles.appearancePositive,
  'negative': styles.appearanceNegative,
  'neutral': styles.appearanceNeutral,
  'overlay': styles.appearanceOverlay,
  'accent-invariable': styles.appearanceAccentInvariable,
};

const stylesAlign = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

const sizeYClassNames = {
  none: styles.sizeYNone,
  regular: styles.sizeYRegular,
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
  onClick,
  className,
  disableSpinnerAnimation,
  rounded,
  ...restProps
}: ButtonProps): React.ReactNode => {
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      hoverMode={styles.hover}
      activeMode={styles.active}
      Component={restProps.href ? 'a' : 'button'}
      focusVisibleMode="outside"
      {...restProps}
      onClick={loading ? undefined : onClick}
      className={classNames(
        className,
        styles.host,
        stylesSize[size],
        stylesMode[mode],
        stylesAppearance[appearance],
        stylesAlign[align],
        sizeY !== 'compact' && sizeYClassNames[sizeY],
        platform === 'ios' && styles.ios,
        stretched && styles.stretched,
        hasIcons && styles.withIcon,
        hasIconOnly && !stretched && styles.singleIcon,
        loading && styles.loading,
        rounded && styles.rounded,
      )}
      getRootRef={getRootRef}
    >
      {loading && (
        <Spinner size="s" className={styles.spinner} disableAnimation={disableSpinnerAnimation} />
      )}
      <span className={styles.in}>
        {hasReactNode(before) && (
          <span
            className={styles.before}
            role="presentation"
            data-testid={process.env.NODE_ENV === 'test' ? 'before' : undefined}
          >
            {before}
          </span>
        )}
        {hasReactNode(children) && (
          <span
            className={styles.content}
            data-testid={process.env.NODE_ENV === 'test' ? 'children' : undefined}
          >
            {children}
          </span>
        )}
        {hasReactNode(after) && (
          <span
            className={styles.after}
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
