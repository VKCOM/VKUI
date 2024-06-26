import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useKeyboard } from '../../../components/Clickable/useKeyboard';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useAppearance } from '../../../hooks/useAppearance';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { DisableClickableLockStateContext } from '../../Clickable/useState';
import { ImageBaseContext } from '../context';
import { validateOverlayIcon } from '../validators';
import { useHover, useNonInteractiveOverlayProps } from './hooks';
import type {
  ImageBaseOverlayInteractiveProps,
  ImageBaseOverlayNonInteractiveProps,
} from './types';
import styles from './ImageBaseOverlay.module.css';

export type ImageBaseOverlayProps =
  | ImageBaseOverlayInteractiveProps
  | ImageBaseOverlayNonInteractiveProps;

const ImageBaseOverlayInteractive = ({
  children,
  className,
  getRootRef,
  nonInteractive,
  overlayShown,
  ...restProps
}: ImageBaseOverlayInteractiveProps & { overlayShown?: boolean }) => {
  const { focusVisible, ...focusEvents } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'inside' });
  const keyboardHandlers = useKeyboard();

  if (process.env.NODE_ENV === 'development') {
    if (children) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { size } = React.useContext(ImageBaseContext);
      validateOverlayIcon(size, { name: 'children', value: children });
    }
  }

  return (
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
      {...focusEvents}
      {...keyboardHandlers}
    >
      {children}
    </div>
  );
};

const ImageBaseOverlayNonInteractive = ({
  className,
  getRootRef,
  nonInteractive,
  overlayShown: overlayShownProps,
  ...restProps
}: ImageBaseOverlayNonInteractiveProps & { overlayShown?: boolean }) => {
  const rootRef = useExternRef(getRootRef);
  const { shown: overlayShown, onClick: onOverlayClick } = useNonInteractiveOverlayProps(rootRef);

  return (
    <DisableClickableLockStateContext.Provider value>
      <div
        {...restProps}
        ref={rootRef}
        className={classNames(
          (overlayShown || overlayShownProps) && styles['ImageBaseOverlay--visible'],
          className,
        )}
        onClick={onOverlayClick}
      />
    </DisableClickableLockStateContext.Provider>
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
  const appearance = useAppearance();
  const hasPointer = useAdaptivityHasPointer();
  const theme = themeProp ?? appearance;
  const visibility = visibilityProp ?? (hasPointer ? 'on-hover' : 'always');
  const { hovered, ...hoverHandlers } = useHover();

  const commonClassNames = classNames(
    styles['ImageBaseOverlay'],
    theme === 'light' && styles['ImageBaseOverlay--theme-light'],
    theme === 'dark' && styles['ImageBaseOverlay--theme-dark'],
    className,
  );

  const commonProps = {
    ...hoverHandlers,
    className: commonClassNames,
    overlayShown: visibility === 'always' || (visibility === 'on-hover' && hovered),
  };

  if (restProps.nonInteractive) {
    return <ImageBaseOverlayNonInteractive {...restProps} {...commonProps} />;
  }

  return <ImageBaseOverlayInteractive {...restProps} {...commonProps} />;
};

ImageBaseOverlay.displayName = 'ImageBaseOverlay';
