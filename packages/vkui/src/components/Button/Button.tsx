import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { HasAlign } from '../../types';
import { Spinner } from '../Spinner/Spinner';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import '../Spinner/Spinner.module.css';
import styles from './Button.module.css';

const stylesSize = {
  s: styles.hostSizeS,
  m: styles.hostSizeM,
  l: styles.hostSizeL,
};

const stylesMode = {
  primary: styles.hostModePrimary,
  secondary: styles.hostModeSecondary,
  tertiary: styles.hostModeTertiary,
  outline: styles.hostModeOutline,
  link: styles.hostModeLink,
};

const stylesAppearance = {
  'accent': styles.hostAppearanceAccent,
  'positive': styles.hostAppearancePositive,
  'negative': styles.hostAppearanceNegative,
  'neutral': styles.hostAppearanceNeutral,
  'overlay': styles.hostAppearanceOverlay,
  'accent-invariable': styles.hostAppearanceAccentInvariable,
};

const stylesAlign = {
  left: styles.hostAlignLeft,
  center: styles.hostAlignCenter,
  right: styles.hostAlignRight,
};

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['regular']: styles.hostSizeYRegular,
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
}: ButtonProps) => {
  const hasIcons = Boolean(before || after);
  const hasIconOnly = !children && Boolean(after) !== Boolean(before);
  const { sizeY = 'none' } = useAdaptivity();
  const platform = usePlatform();

  return (
    <Tappable
      hoverMode={styles.hostHover}
      activeMode={styles.hostActive}
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
        platform === 'ios' && styles.hostIos,
        stretched && styles.hostStretched,
        hasIcons && styles.hostWithIcon,
        hasIconOnly && !stretched && styles.hostSingleIcon,
        loading && styles.hostLoading,
        rounded && styles.hostRounded,
      )}
      getRootRef={getRootRef}
    >
      {loading && (
        <Spinner
          size="small"
          className={styles.spinner}
          disableAnimation={disableSpinnerAnimation}
        />
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
