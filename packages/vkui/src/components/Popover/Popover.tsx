import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { animationFadeClassNames, transformOriginClassNames } from '../../lib/animation';
import {
  type FloatingComponentProps,
  type FloatingContentRenderProp,
  type OnShownChange,
  useFloatingMiddlewaresBootstrap,
  useFloatingWithInteractions,
  usePlacementChangeCallback,
} from '../../lib/floating';
import { warnOnce } from '../../lib/warnOnce';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import {
  DEFAULT_ARROW_HEIGHT,
  DEFAULT_ARROW_PADDING,
  DefaultIcon,
} from '../FloatingArrow/DefaultIcon';
import {
  FloatingArrow,
  type FloatingArrowProps as FloatingArrowPropsPrivate,
} from '../FloatingArrow/FloatingArrow';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { PopoverWithAnchor } from './PopoverWithAnchor';
import { PopoverWithChildren } from './PopoverWithChildren';
import styles from './Popover.module.css';

const warn = warnOnce('Popover');

/**
 * @alias
 * @public
 */
export type PopoverArrowProps = Omit<
  FloatingArrowPropsPrivate,
  'getRootRef' | 'coords' | 'placement' | 'Icon'
>;

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
  | 'arrow'
  | 'arrowHeight'
  | 'arrowPadding'
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
  | 'onShownChanged'
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
  | 'disableFlipMiddleware'
  | 'customMiddlewares'
>;

/**
 * @public
 */
export interface PopoverProps
  extends AllowedFloatingComponentProps,
    Omit<HTMLAttributesWithRootRef<HTMLDivElement>, keyof FloatingComponentProps> {
  /**
   * Отключает у всплывающего элемента стилизацию по умолчанию.
   *
   * У `content`:
   * - _background_
   * - _border-radius_
   * - _box-shadow_
   *
   * У `arrow`:
   * - _color_
   *
   * Используется в случае, если необходимо стилизовать по своему. Для `arrow` _color_ можно
   * определить через в `arrowProps.iconClassName` или `arrowProps.iconStyle`.
   */
  noStyling?: boolean;
  /**
   * Позволяет набросить на стрелку пользовательские атрибуты.
   */
  arrowProps?: PopoverArrowProps;
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Передайте высоту иконки в параметр `arrowHeight`. В значении высоты можно исключить хак с `1px` из п.2.
   * 4. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 5. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   */
  ArrowIcon?: FloatingArrowPropsPrivate['Icon'];
  /**
   * Используется для того, чтобы не удалять поповер из DOM дерева при скрытии.
   */
  keepMounted?: boolean;
  /**
   * Элемент используется вместо `children`. При передаче его, `children` можно не передавать
   */
  anchorRef?: React.RefObject<HTMLElement> | HTMLElement;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popover
 */
export const Popover = ({
  // UsePopoverProps
  arrow: withArrow,
  arrowHeight = DEFAULT_ARROW_HEIGHT,
  arrowPadding = DEFAULT_ARROW_PADDING,
  placement: expectedPlacement = 'bottom-start',
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
  anchorRef,
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
  children,
  noStyling = false,
  zIndex = 'var(--vkui--z_index_popout)',
  // a11y
  role = 'dialog',
  ...restPopoverProps
}: PopoverProps): React.ReactNode => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    arrow: withArrow,
    arrowRef,
    arrowHeight,
    arrowPadding,
    placement: expectedPlacement,
    offsetByMainAxis,
    offsetByCrossAxis,
    sameWidth,
    hideWhenReferenceHidden,
    disableFlipMiddleware,
    customMiddlewares,
  });
  const {
    placement: resolvedPlacement,
    shown,
    willBeHide,
    refs,
    referenceProps,
    floatingProps,
    middlewareData,
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
    onShownChanged,
  });

  usePlacementChangeCallback(expectedPlacement, resolvedPlacement, onPlacementChange);

  let popover: React.ReactNode = null;
  if (shown || keepMounted) {
    const hidden = keepMounted && !shown;

    let arrow: React.ReactElement | null = null;
    if (withArrow) {
      const { arrow: arrowCoords } = middlewareData;
      arrow = (
        <FloatingArrow
          iconClassName={noStyling ? undefined : styles['Popover__arrow']}
          {...arrowProps}
          coords={arrowCoords}
          placement={resolvedPlacement}
          getRootRef={setArrowRef}
          Icon={ArrowIcon}
        />
      );
    }

    popover = (
      <AppRootPortal usePortal={usePortal}>
        <div
          ref={refs.setFloating}
          className={classNames(styles['Popover'], hidden && styles['Popover--hidden'])}
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
              styles['Popover__in'],
              noStyling ? undefined : styles['Popover__in--withStyling'],
              willBeHide ? animationFadeClassNames.out : animationFadeClassNames.in,
              transformOriginClassNames[resolvedPlacement],
              className,
            )}
            mount={!hidden}
            disabled={hidden}
            autoFocus={disableInteractive ? false : autoFocus}
            restoreFocus={restoreFocus ? onRestoreFocus : false}
            onClose={onEscapeKeyDown}
          >
            {arrow}
            {typeof content === 'function' ? content({ onClose }) : content}
          </FocusTrap>
        </div>
      </AppRootPortal>
    );
  }

  if (process.env.NODE_ENV === 'development' && !children && !anchorRef) {
    warn('В компонент не передан ни children ни anchorRef', 'error');
  }

  if (anchorRef) {
    return (
      <PopoverWithAnchor
        popover={popover}
        referenceProps={referenceProps}
        refs={refs}
        shown={shown}
        role={role}
        anchorRef={anchorRef}
      />
    );
  }

  return (
    <PopoverWithChildren
      popover={popover}
      referenceProps={referenceProps}
      refs={refs}
      shown={shown}
      role={role}
    >
      {children}
    </PopoverWithChildren>
  );
};
