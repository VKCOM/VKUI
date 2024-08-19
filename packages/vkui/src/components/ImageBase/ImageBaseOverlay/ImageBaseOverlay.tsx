import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useAppearance } from '../../../hooks/useAppearance';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { clickByKeyboardHandler } from '../../../lib/utils';
import { ImageBaseContext } from '../context';
import { validateOverlayIcon } from '../validators';
import { useNonInteractiveOverlayProps } from './hooks';
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
  disableInteractive,
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
          styles['ImageBaseOverlay--clickable'],
          (focusVisible || overlayShown) && styles['ImageBaseOverlay--visible'],
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
  disableInteractive,
  overlayShown: overlayShownProps,
  ...restProps
}: ImageBaseOverlayNonInteractiveProps & { overlayShown?: boolean }) => {
  const rootRef = useExternRef(getRootRef);
  const { shown: overlayShown, onClick: onOverlayClick } = useNonInteractiveOverlayProps(rootRef);

  return (
    <div
      {...restProps}
      ref={rootRef}
      className={classNames(
        (overlayShown || overlayShownProps) && styles['ImageBaseOverlay--visible'],
        className,
      )}
      onClick={onOverlayClick}
    />
  );
};

/**
 * Оверлей над картинкой.
 */
export const ImageBaseOverlay: React.FC<ImageBaseOverlayProps> = ({
  className,
  theme: themeProp,
  visibility: visibilityProp,
  ...restProps
}: ImageBaseOverlayProps) => {
  const appearance = useAppearance();
  const hasPointer = useAdaptivityHasPointer();
  const theme = themeProp ?? appearance;
  const visibility = visibilityProp ?? (hasPointer ? 'on-hover' : 'always');

  const commonClassNames = classNames(
    styles['ImageBaseOverlay'],
    theme === 'light' && styles['ImageBaseOverlay--theme-light'],
    theme === 'dark' && styles['ImageBaseOverlay--theme-dark'],
    className,
  );

  const commonProps = {
    className: commonClassNames,
    overlayShown: visibility === 'always',
  };

  // Не делаем деструктуризацию пропа, потому что Typescript не вывозит
  if (restProps.disableInteractive) {
    return <ImageBaseOverlayNonInteractive {...restProps} {...commonProps} />;
  }

  return <ImageBaseOverlayInteractive {...restProps} {...commonProps} />;
};

ImageBaseOverlay.displayName = 'ImageBaseOverlay';
