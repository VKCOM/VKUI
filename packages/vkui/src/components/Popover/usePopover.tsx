import { type Ref } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type FloatingComponentProps, useFloatingElement } from '../../hooks/useFloatingElement';
import { injectAriaExpandedPropByRole } from '../../lib/accessibility';
import { animationFadeClassNames, transformOriginClassNames } from '../../lib/animation';
import { type ReferenceProps } from '../../lib/floating/useFloatingWithInteractions/types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import {
  DEFAULT_ARROW_HEIGHT,
  DEFAULT_ARROW_PADDING,
  DefaultIcon,
} from '../FloatingArrow/DefaultIcon';
import { FloatingArrow } from '../FloatingArrow/FloatingArrow';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { type PopoverProps } from './Popover';
import styles from './Popover.module.css';

export type UsePopoverProps = Omit<PopoverProps, 'children'> & {
  [key: `data-${string}`]: string | number | boolean;
};

export type UsePopoverResult<ElementType extends HTMLElement = HTMLElement> = {
  anchorRef: Ref<ElementType>;
  anchorProps: ReferenceProps<ElementType>;
  popover: React.ReactNode | null;
};

export const usePopover = <ElementType extends HTMLElement = HTMLElement>({
  // UsePopoverProps
  arrow: withArrow,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  arrowPadding = DEFAULT_ARROW_PADDING,
  placement = 'bottom-start',
  onPlacementChange,
  disableFlipMiddleware = false,
  trigger = 'click',
  content,
  hoverDelay = 150,
  closeAfterClick,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  sameWidth,
  hideWhenReferenceHidden,
  disabled,
  disableInteractive,
  disableCloseOnClickOutside,
  disableCloseOnEscKey,
  keepMounted = false,
  customMiddlewares,
  // uncontrolled
  defaultShown = false,
  // controlled
  shown: shownProp,
  onShownChange,
  onShownChanged,

  // Для AppRootPortal
  usePortal = true,

  // Для FloatingArrow
  arrowProps,
  ArrowIcon = DefaultIcon,

  // FocusTrapProps
  autoFocus = true,
  restoreFocus = true,
  className,
  noStyling = false,
  zIndex = 'var(--vkui--z_index_popout)',
  // a11y
  role = 'dialog',
  ...restPopoverProps
}: UsePopoverProps): UsePopoverResult<ElementType> => {
  const renderFloatingComponent = React.useCallback(
    ({
      shown,
      middlewareData,
      placement: resolvedPlacement,
      setArrowRef,
      floatingRef,
      floatingProps,
      willBeHide,
      onRestoreFocus,
      onEscapeKeyDown,
      onClose,
    }: FloatingComponentProps<HTMLDivElement>) => {
      if (!shown && !keepMounted) {
        return null;
      }
      const hidden = keepMounted && !shown;

      let arrow: React.ReactElement | null = null;
      if (withArrow) {
        const { arrow: arrowCoords } = middlewareData;
        arrow = (
          <FloatingArrow
            iconClassName={noStyling ? undefined : styles.arrow}
            {...arrowProps}
            coords={arrowCoords}
            placement={resolvedPlacement}
            getRootRef={setArrowRef}
            Icon={ArrowIcon}
          />
        );
      }
      return (
        <AppRootPortal usePortal={usePortal}>
          <div
            ref={floatingRef}
            className={classNames(styles.host, hidden && styles.hidden)}
            {...floatingProps}
            style={{
              zIndex: !hidden ? zIndex : undefined,
              ...floatingProps.style,
            }}
          >
            <FocusTrap
              {...restPopoverProps}
              role={role}
              className={classNames(
                styles.in,
                noStyling ? undefined : styles.inWithStyling,
                willBeHide ? animationFadeClassNames.out : animationFadeClassNames.in,
                transformOriginClassNames[resolvedPlacement],
                className,
              )}
              mount={!hidden}
              disabled={hidden}
              autoFocus={disableInteractive ? false : autoFocus}
              restoreFocus={restoreFocus ? () => onRestoreFocus(restoreFocus) : false}
              onClose={onEscapeKeyDown}
            >
              {arrow}
              {typeof content === 'function' ? content({ onClose }) : content}
            </FocusTrap>
          </div>
        </AppRootPortal>
      );
    },
    [
      ArrowIcon,
      arrowProps,
      autoFocus,
      className,
      content,
      disableInteractive,
      keepMounted,
      noStyling,
      restPopoverProps,
      restoreFocus,
      role,
      usePortal,
      withArrow,
      zIndex,
    ],
  );

  const { anchorRef, anchorProps, component, componentShow } = useFloatingElement<
    ElementType,
    HTMLDivElement
  >({
    arrow: withArrow,
    arrowHeight,
    arrowPadding,
    placement,
    offsetByMainAxis,
    offsetByCrossAxis,
    sameWidth,
    hideWhenReferenceHidden,
    disableFlipMiddleware,
    customMiddlewares,

    trigger,
    hoverDelay,
    closeAfterClick,
    disabled,
    disableInteractive,
    disableCloseOnClickOutside,
    disableCloseOnEscKey,
    defaultShown,
    shown: shownProp,
    onShownChange,
    onShownChanged,

    onPlacementChange,
    renderFloatingComponent,
  });

  return {
    anchorRef,
    anchorProps: injectAriaExpandedPropByRole(anchorProps, componentShow, role),
    popover: component,
  };
};
