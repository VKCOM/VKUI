'use client';

import * as React from 'react';
import { useReferenceElement } from '../../hooks/useReferenceElement';
import {
  type FloatingComponentProps,
  type FloatingContentRenderProp,
  type OnShownChange,
} from '../../lib/floating';
import type { HTMLAttributesWithRootRef } from '../../types';
import { type FloatingArrowProps as FloatingArrowPropsPrivate } from '../FloatingArrow/FloatingArrow';
import type { FocusTrapProps } from '../FocusTrap/FocusTrap';
import { usePopover } from './usePopover';

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
  | 'onReferenceHiddenChange'
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
  | 'strategy'
  | 'disableFocusTrap'
>;

/**
 * @public
 */
export interface PopoverProps
  extends Omit<AllowedFloatingComponentProps, 'autoFocus'>,
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
  autoFocus?: FocusTrapProps['autoFocus'];
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popover
 */
export const Popover = ({ children, ...restProps }: PopoverProps): React.ReactNode => {
  const { anchorRef, anchorProps, popover } = usePopover<HTMLDivElement>(restProps);

  const reference = useReferenceElement(children, anchorProps, anchorRef);

  return (
    <React.Fragment>
      {reference}
      {popover}
    </React.Fragment>
  );
};
