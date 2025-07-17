import { type Ref, useCallback } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFloatingElement, type UseFloatingElementProps } from '../../hooks/useFloatingElement';
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
  /**
   * Реф на якорный элемент.
   */
  anchorRef: Ref<ElementType>;
  /**
   * Свойства для якорного элемента, содержит необходимые обработчики.
   */
  anchorProps: ReferenceProps<ElementType>;
  /**
   * Отрендеренный компонент всплывающего элемента.
   */
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
  disableShiftMiddleware = false,
  trigger = 'click',
  strategy,
  content,
  hoverDelay = 150,
  closeAfterClick,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  sameWidth,
  hideWhenReferenceHidden,
  onReferenceHiddenChange,
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
  disableFocusTrap,
  // a11y
  role = 'dialog',
  ...restPopoverProps
}: UsePopoverProps): UsePopoverResult<ElementType> => {
  const renderFloatingComponent: UseFloatingElementProps<HTMLDivElement>['renderFloatingComponent'] =
    React.useCallback(
      ({
        shown,
        middlewareData,
        placement: resolvedPlacement,
        setArrowRef,
        floatingRef,
        floatingProps,
        willBeHide,
        onRestoreFocus,
        onClose,
      }) => {
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
                disabled={hidden || disableFocusTrap}
                autoFocus={disableInteractive ? false : autoFocus}
                restoreFocus={restoreFocus ? () => onRestoreFocus(restoreFocus) : false}
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
        disableFocusTrap,
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

  const remapReferenceProps: Exclude<UseFloatingElementProps['remapReferenceProps'], undefined> =
    useCallback(
      ({ shown, ...referenceProps }) => injectAriaExpandedPropByRole(referenceProps, shown, role),
      [role],
    );

  const { anchorRef, anchorProps, component } = useFloatingElement<ElementType, HTMLDivElement>({
    arrow: withArrow,
    arrowHeight,
    arrowPadding,
    placement,
    offsetByMainAxis,
    offsetByCrossAxis,
    sameWidth,
    hideWhenReferenceHidden,
    disableFlipMiddleware,
    disableShiftMiddleware,
    customMiddlewares,

    trigger,
    strategy,
    hoverDelay,
    onReferenceHiddenChange,
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
    remapReferenceProps,
  });

  return {
    anchorRef,
    anchorProps,
    popover: component,
  };
};
