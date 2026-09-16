import type * as React from 'react';
import {
  hasAccessibleName,
  hasOwnInteractiveSemantics,
  supportsAriaExpanded,
} from '../lib/accessibility';
import { clickByKeyboardHandler, isValidNotReactFragmentElement } from '../lib/utils';
import { COMMON_WARNINGS, warnOnce } from '../lib/warnOnce';
import { usePatchChildren } from './usePatchChildren';

const warn = warnOnce('useReferenceElement');

/**
 * Доводит неинтерактивный триггер до кнопки.
 *
 * Плавающие компоненты добавляют триггеру `aria-expanded` и обработчик клика, но не роль и не
 * фокусируемость. На `div` получается элемент, до которого нельзя добраться с клавиатуры, и
 * нарушение `aria-allowed-attr`: состояние без роли, которой оно принадлежит.
 *
 * Роль и `tabIndex` добавляются только элементу без собственной интерактивной семантики и с доступным
 * именем. Если роль задана явно или элемент — нативный контрол, решение принимал потребитель либо
 * платформа, переопределять его нельзя. Безымянная кнопка не лучше `div`: она становится точкой
 * табуляции, которая ничего не объявляет. В обоих случаях остаётся убрать недопустимый атрибут.
 */
function enhanceNonInteractiveReference<
  Props extends {
    'aria-expanded'?: unknown;
    'onClick'?: unknown;
  },
>(element: React.ReactElement, injectProps: Props | undefined): Props | undefined {
  if (!injectProps || injectProps['aria-expanded'] === undefined) {
    return injectProps;
  }

  if (supportsAriaExpanded(element)) {
    return injectProps;
  }

  const elementProps = (element.props ?? {}) as React.AriaAttributes & {
    children?: React.ReactNode;
    tabIndex?: number;
    title?: string;
  };
  const openedByClick = typeof injectProps.onClick === 'function';
  const canBecomeButton = openedByClick && hasAccessibleName(elementProps);

  if (hasOwnInteractiveSemantics(element) || !canBecomeButton) {
    if (process.env.NODE_ENV === 'development') {
      warn(COMMON_WARNINGS.a11y['aria-allowed-attr'], 'error');
    }

    const { 'aria-expanded': omittedAriaExpanded, ...restInjectProps } = injectProps;

    return restInjectProps as Props;
  }

  return {
    ...injectProps,
    role: 'button',
    tabIndex: elementProps.tabIndex ?? 0,
    onKeyDown: clickByKeyboardHandler,
  };
}

export const useReferenceElement = <ElementType extends HTMLElement = HTMLElement>(
  ...args: Parameters<typeof usePatchChildren<ElementType>>
) => {
  const [children, injectProps, externRef] = args;
  const child = isValidNotReactFragmentElement(children) ? children : <span>{children}</span>;

  const [, patchedChild] = usePatchChildren(
    child,
    enhanceNonInteractiveReference(child, injectProps),
    externRef,
  );

  return patchedChild;
};
