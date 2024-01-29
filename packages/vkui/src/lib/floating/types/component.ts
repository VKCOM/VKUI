import * as React from 'react';
import type { UseFloatingMiddlewaresBootstrapOptions } from '../useFloatingMiddlewaresBootstrap';
import type {
  UseFloatingWithInteractionsProps,
  UseFloatingWithInteractionsReturn,
} from '../useFloatingWithInteractions';
import { OnPlacementChange } from './common';

/**
 * @private используйте алиасы, если для какого-то компонента нужно экспортировать тип
 */
export type FloatingContentRenderProp = (
  props: Pick<UseFloatingWithInteractionsReturn, 'onClose'>,
) => React.ReactNode;

/**
 * Общий API для всплывающих элементов.
 *
 * @private
 */
export interface FloatingComponentProps
  extends UseFloatingMiddlewaresBootstrapOptions,
    Omit<UseFloatingWithInteractionsProps, 'placement' | 'middlewares'> {
  /**
   * Содержимое всплывающего окна.
   *
   * При передаче контента в виде [render prop](https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop),
   * в аргументе функции можно получить метод `onClose`, с помощью которого можно программно закрывать
   * всплывающее окно.
   */
  content?: React.ReactNode | FloatingContentRenderProp;
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
   * Перебивает zIndex заданный по умолчанию.
   */
  zIndex?: number | string;
  /**
   * По умолчанию используется document.body.
   */
  usePortal?: boolean | HTMLElement | React.RefObject<HTMLElement>;
  /**
   * В зависимости от области видимости, позиция может смениться на более оптимальную,
   * чтобы всплывающий элемент вместился в эту область видимости.
   */
  onPlacementChange?: OnPlacementChange;
}
