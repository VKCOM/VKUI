import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { injectAriaExpandedPropByRole } from '../../lib/accessibility';
import { animationFadeClassNames, transformOriginClassNames } from '../../lib/cssAnimation';
import {
  type FloatingComponentProps,
  type FloatingContentRenderProp,
  type OnShownChange,
  useFloatingMiddlewaresBootstrap,
  useFloatingWithInteractions,
  usePlacementChangeCallback,
} from '../../lib/floating';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import styles from './Popover.module.css';

/**
 * @alias
 * @public
 */
export type PopoverOnShownChange = OnShownChange;

/**
 * @alias
 * @public
 */
export type PopoverContentRenderProp = FloatingContentRenderProp;

type AllowedFloatingComponentProps = Pick<
  FloatingComponentProps,
  | 'placement'
  | 'onPlacementChange'
  | 'trigger'
  | 'content'
  | 'hoverDelay'
  | 'closeAfterClick'
  | 'offsetByMainAxis'
  | 'offsetByCrossAxis'
  | 'defaultShown'
  | 'shown'
  | 'onShownChange'
  | 'usePortal'
  | 'sameWidth'
  | 'hideWhenReferenceHidden'
  | 'disabled'
  | 'disableInteractive'
  | 'disableCloseOnClickOutside'
  | 'disableCloseOnEscKey'
  | 'autoFocus'
  | 'restoreFocus'
  | 'children'
  | 'zIndex'
>;

/**
 * @public
 */
export interface PopoverProps
  extends AllowedFloatingComponentProps,
    Omit<HTMLAttributesWithRootRef<HTMLDivElement>, keyof FloatingComponentProps> {
  /**
   * Отключает у всплывающего элемента стилизацию по умолчанию, а именно:
   * - background
   * - border-radius
   * - box-shadow
   *
   * Используется в случае, если необходимо стилизовать по своему.
   */
  noStyling?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popover
 */
export const Popover = ({
  // UsePopoverProps
  placement: expectedPlacement = 'bottom-start',
  onPlacementChange,
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
  // uncontrolled
  defaultShown = false,
  // controlled
  shown: shownProp,
  onShownChange,

  // Для AppRootPortal
  usePortal = true,

  // FocusTrapProps
  autoFocus = true,
  restoreFocus = true,
  className,
  children,
  noStyling = false,
  zIndex = 'var(--vkui--z_index_popout)',
  // a11y
  role,
  ...restPopoverProps
}: PopoverProps) => {
  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement: expectedPlacement,
    offsetByMainAxis,
    offsetByCrossAxis,
    sameWidth,
    hideWhenReferenceHidden,
  });
  const {
    placement,
    shown,
    willBeHide,
    refs,
    referenceProps,
    floatingProps,
    onClose,
    onRestoreFocus,
    onEscapeKeyDown,
  } = useFloatingWithInteractions({
    middlewares,
    placement: strictPlacement,
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
  });

  usePlacementChangeCallback(placement, onPlacementChange);

  const [, child] = usePatchChildren<HTMLDivElement>(
    children,
    injectAriaExpandedPropByRole(referenceProps, shown, role),
    refs.setReference,
  );

  let popover: React.ReactNode = null;
  if (shown) {
    floatingProps.style.zIndex = String(zIndex);
    popover = (
      <AppRootPortal usePortal={usePortal}>
        <div ref={refs.setFloating} className={styles['Popover']} {...floatingProps}>
          <FocusTrap
            {...restPopoverProps}
            role={role}
            className={classNames(
              styles['Popover__in'],
              noStyling ? undefined : styles['Popover__in--withStyling'],
              willBeHide ? animationFadeClassNames.out : animationFadeClassNames.in,
              transformOriginClassNames[placement],
              className,
            )}
            autoFocus={disableInteractive ? false : autoFocus}
            restoreFocus={restoreFocus ? onRestoreFocus : false}
            onClose={onEscapeKeyDown}
          >
            {typeof content === 'function' ? content({ onClose }) : content}
          </FocusTrap>
        </div>
      </AppRootPortal>
    );
  }

  return (
    <React.Fragment>
      {child}
      {popover}
    </React.Fragment>
  );
};
