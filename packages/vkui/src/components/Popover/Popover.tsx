import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { injectAriaExpandedPropByRole } from '../../lib/accessibility';
import { createPortal } from '../../lib/createPortal';
import { animationFadeClassNames, transformOriginClassNames } from '../../lib/cssAnimation';
import { getDocumentBody } from '../../lib/dom';
import {
  type OnShownChange,
  useFloatingWithInteractions,
  type UseFloatingWithInteractionsProps,
  type UseFloatingWithInteractionsReturn,
} from '../../lib/floating';
import type { HTMLAttributesWithRootRef } from '../../types';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import styles from './Popover.module.css';

export type PopoverOnShownChange = OnShownChange;

export type PopoverContentRenderProp = (
  props: Pick<UseFloatingWithInteractionsReturn, 'onClose'>,
) => React.ReactNode;

export interface PopoverProps
  extends UseFloatingWithInteractionsProps,
    Omit<
      HTMLAttributesWithRootRef<HTMLDivElement>,
      keyof UseFloatingWithInteractionsProps | 'content'
    > {
  /**
   * Содержимое всплывающего окна.
   *
   * При передаче контента в виде [render prop](https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop),
   * в аргументе функции можно получить метод `onClose`, с помощью которого можно программно закрывать
   * всплывающее окно.
   */
  content?: React.ReactNode | PopoverContentRenderProp;
  /**
   * Целевой элемент. Всплывающее окно появится возле него.
   *
   * > ⚠️ Если это пользовательский компонент, то он должен:
   * > 1. предоставлять параметры либо `getRootRef`, либо `ref` (cм. `React.forwardRef()`) для получения ссылки на DOM-узел;
   * > 2. принимать DOM атрибуты и события.
   */
  children?: React.ReactElement;
  /**
   * Нужно ли при навигации с клавиатуры авто-фокусироваться на всплывающий элемент.
   */
  autoFocus?: boolean;
  /**
   * Нужно ли после закрытия всплывающего элемента возвращать фокус на предыдущий активный элемент.
   */
  restoreFocus?: boolean;
  /**
   * Отключает у всплывающего элемента стилизацию по умолчанию, а именно:
   * - background
   * - border-radius
   * - box-shadow
   *
   * Используется в случае, если необходимо стилизовать по своему.
   */
  noStyling?: boolean;
  /**
   * Перебивает zIndex заданный по умолчанию.
   */
  zIndex?: number | string;
  /**
   * По умолчанию используется document.body.
   */
  usePortal?: boolean | Element | DocumentFragment;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Popover
 */
export const Popover = ({
  // UsePopoverProps
  placement: expectedPlacement = 'bottom-start',
  trigger = 'click',
  content,
  hoverDelay = 150,
  offsetByMainAxis = 8,
  offsetByCrossAxis = 0,
  disabled,
  disableInteractive,
  disableCloseOnClickOutside,
  disableCloseOnEscKey,
  // uncontrolled
  defaultShown = false,
  // controlled
  shown: shownProp,
  onShownChange,

  // Для createPortal
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
    placement: expectedPlacement,
    trigger,
    hoverDelay,
    offsetByMainAxis,
    offsetByCrossAxis,
    disabled,
    disableInteractive,
    disableCloseOnClickOutside,
    disableCloseOnEscKey,
    defaultShown,
    shown: shownProp,
    onShownChange,
  });

  const [childRef, child] = usePatchChildren<HTMLDivElement>(
    children,
    injectAriaExpandedPropByRole(referenceProps, shown, role),
    refs.setReference,
  );

  let popover: React.ReactNode = null;
  if (shown) {
    floatingProps.style.zIndex = String(zIndex);
    popover = (
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
    );
  }

  return (
    <React.Fragment>
      {child}
      {usePortal && popover
        ? createPortal(
            popover,
            typeof usePortal !== 'boolean' ? usePortal : getDocumentBody(childRef.current),
          )
        : popover}
    </React.Fragment>
  );
};
