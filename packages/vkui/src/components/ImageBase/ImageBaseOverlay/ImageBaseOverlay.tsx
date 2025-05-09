'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useColorScheme } from '../../../hooks/useColorScheme';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { clickByKeyboardHandler } from '../../../lib/utils';
import { ImageBaseContext } from '../context';
import { validateOverlayIcon } from '../validators';
import { useCalculatedDefaultVisibility, useNonInteractiveOverlayProps } from './hooks';
import type {
  ImageBaseOverlayInteractiveProps,
  ImageBaseOverlayNonInteractiveProps,
} from './types';
import styles from './ImageBaseOverlay.module.css';

function DevelopmentCheck({ children }: Pick<ImageBaseOverlayInteractiveProps, 'children'>) {
  const { size } = React.useContext(ImageBaseContext);

  if (process.env.NODE_ENV === 'development') {
    if (children) {
      validateOverlayIcon(size, { name: 'children', value: children });
    }
  }

  return null;
}

export type ImageBaseOverlayProps =
  | ImageBaseOverlayInteractiveProps
  | ImageBaseOverlayNonInteractiveProps;

const ImageBaseOverlayInteractive = ({
  children,
  className,
  getRootRef,
  overlayShown,
  ...restProps
}: ImageBaseOverlayInteractiveProps & { overlayShown?: boolean }) => {
  const { focusVisible, ...focusEvents } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'inside' });

  return (
    <>
      <div
        {...restProps}
        tabIndex={0}
        role="button"
        className={classNames(
          styles.clickable,
          (focusVisible || overlayShown) && styles.visible,
          focusVisibleClassNames,
          className,
        )}
        ref={getRootRef}
        onKeyDown={clickByKeyboardHandler}
        {...focusEvents}
      >
        {children}
      </div>
      {process.env.NODE_ENV === 'development' && <DevelopmentCheck>{children}</DevelopmentCheck>}
    </>
  );
};

const ImageBaseOverlayNonInteractive = ({
  className,
  getRootRef,
  overlayShown: overlayShownProps,
  ...restProps
}: ImageBaseOverlayNonInteractiveProps & { overlayShown?: boolean }) => {
  const rootRef = useExternRef(getRootRef);
  const { shown: overlayShown, onClick: onOverlayClick } = useNonInteractiveOverlayProps(rootRef);

  return (
    <div
      {...restProps}
      ref={rootRef}
      className={classNames((overlayShown || overlayShownProps) && styles.visible, className)}
      onClick={onOverlayClick}
    />
  );
};

/**
 * Оверлей над картинкой.
 */
export const ImageBaseOverlay = ({
  className,
  theme: themeProp,
  visibility: visibilityProp,
  ...restProps
}: ImageBaseOverlayProps) => {
  const colorScheme = useColorScheme();

  const theme = themeProp ?? colorScheme;

  const commonClassNames = classNames(
    styles.host,
    theme === 'light' && styles.themeLight,
    theme === 'dark' && styles.themeDark,
    className,
  );

  const defaultVisibility = useCalculatedDefaultVisibility();
  const visibility = visibilityProp ?? defaultVisibility;

  const commonProps = {
    className: commonClassNames,
    overlayShown: visibility === 'always',
  };

  // Не делаем деструктуризацию пропа, потому что Typescript не вывозит
  if (!restProps.onClick) {
    return <ImageBaseOverlayNonInteractive {...restProps} {...commonProps} />;
  }

  return <ImageBaseOverlayInteractive {...restProps} {...commonProps} />;
};
