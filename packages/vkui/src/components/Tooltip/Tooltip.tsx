'use client';

import * as React from 'react';
import { useReferenceElement } from '../../hooks/useReferenceElement';
import { type FloatingComponentProps, type OnShownChange } from '../../lib/floating';
import { type FloatingArrowProps as FloatingArrowPropsPrivate } from '../FloatingArrow/FloatingArrow';
import { type TooltipBaseProps } from '../TooltipBase/TooltipBase';
import { useTooltip } from './useTooltip';

type AllowedFloatingComponentProps = Pick<
  FloatingComponentProps,
  | 'arrowHeight'
  | 'arrowPadding'
  | 'hoverDelay'
  | 'placement'
  | 'offsetByMainAxis'
  | 'offsetByCrossAxis'
  | 'defaultShown'
  | 'onShownChange'
  | 'hideWhenReferenceHidden'
  | 'onReferenceHiddenChange'
  | 'children'
  | 'zIndex'
  | 'usePortal'
  | 'onPlacementChange'
  | 'disableFlipMiddleware'
  | 'strategy'
>;

type AllowedTooltipBaseProps = Omit<TooltipBaseProps, 'arrowProps' | 'onCloseIconClick'>;

/**
 * @alias
 * @public
 */
export type TooltipArrowProps = Omit<
  FloatingArrowPropsPrivate,
  'getRootRef' | 'coords' | 'placement' | 'Icon'
>;

/**
 * @alias
 * @public
 */
export type TooltipOnShownChange = OnShownChange;

export interface TooltipProps extends AllowedFloatingComponentProps, AllowedTooltipBaseProps {
  /**
   * Передача `boolean` позволяет контролировать состояния показа и скрытия вручную. Используйте
   * совместно с `onShownChange`.
   *
   * > Если нужно разово инициировать показ тултипа при первом рендере, то используйте `defaultShown`.
   */
  shown?: boolean;
  /**
   * Добавляет возможность наводить на тултип.
   */
  enableInteractive?: boolean;
  /**
   * Добавляет возможность закрыть тултип через иконку-крестик.
   *
   * > Работает в сочетании с `enableInteractive` или при использовании `shown` и `onShownChange`.
   */
  closable?: boolean;
  /**
   * Скрывает стрелку, указывающую на якорный элемент.
   */
  disableArrow?: boolean;
  /**
   * Отключает закрытие по клику.
   */
  disableCloseAfterClick?: boolean;
  /**
   * Отключает появление при фокусе.
   */
  disableTriggerOnFocus?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const Tooltip = ({ children, ...restProps }: TooltipProps): React.ReactNode => {
  const { anchorRef, anchorProps, tooltip } = useTooltip(restProps);

  const anchor = useReferenceElement(children, anchorProps, anchorRef);

  return (
    <React.Fragment>
      {anchor}
      {tooltip}
    </React.Fragment>
  );
};
