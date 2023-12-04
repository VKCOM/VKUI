import type {
  Placement,
  UseFloatingData,
  UseFloatingMiddleware,
  UseFloatingRefs,
} from '../types/common';

export type InteractiveTriggerType = 'click' | 'hover' | 'focus';

export type ManualTriggerType = 'manual';

export type TriggerType = ManualTriggerType | InteractiveTriggerType | InteractiveTriggerType[];

export type ShownChangeReason =
  | 'click-outside'
  | 'escape-key'
  | 'click'
  | 'hover'
  | 'focus'
  | 'callback';

export type OnShownChange = (shown: boolean, reason?: ShownChangeReason) => void;

export interface UseFloatingWithInteractionsProps {
  placement?: Placement;
  middlewares?: UseFloatingMiddleware[];
  /**
   * Механика вызова всплывающего элемента.
   *
   * - `"click"` – показывается/скрывается только при нажатии.
   * - `"hover"` – будет показываться/скрывается при наведении/отведении мыши.
   * - `"focus"` – будет показываться/скрывается при фокусе/потере фокуса мыши.
   * - `"manual"` – будет показываться/скрывается только через свойство `shown`. `onShownChange`
   *    будет вызываться при нажатии за пределы целевого и всплывающего элементов, а также по кнопке
   *    ESC.
   *
   * > ⚠️`"hover"` на тач-устройствах будет работать как `"click"`, с одним лишь нюансом, что
   * > не будет закрываться при повторном нажатии на целевой элемент. Для закрытия необходимо нажать
   * > на область вне целевого элемента и выпадающего окна.
   */
  trigger?: TriggerType;
  /**
   * Количество миллисекунд, после которых произойдёт показ/скрытие всплывающего элемента
   * при наведении.
   *
   * > Чтобы задать разное время на показ и скрытие, передайте массив типа `[<показ>, <скрытие>]`.
   *
   * > Используется только для `trigger="hover"`.
   */
  hoverDelay?: number | [number, number];
  /**
   * При `trigger="hover"` закрывает всплывающий элемент при нажатии на целевой элемент.
   */
  closeAfterClick?: boolean;
  /**
   * Блокирует изменение состояния.
   */
  disabled?: boolean;
  /**
   * Отключает взаимодействие со всплывающим элементом.
   */
  disableInteractive?: boolean;
  /**
   * Отключает закрытие нажатием на область вне целевого и всплывающего элемента.
   */
  disableCloseOnClickOutside?: boolean;
  /**
   * Отключает закрытие нажатием на кнопку ESC.
   */
  disableCloseOnEscKey?: boolean;
  /**
   * Начальное состояние всплывающего элемента.
   */
  defaultShown?: boolean;
  /**
   * Если передан, то всплывающий элемент будет показано/скрыто в зависимости от значения свойства.
   */
  shown?: boolean;
  /**
   * Вызывается при каждом изменении видимости всплывающего элемента.
   */
  onShownChange?: OnShownChange;
}

export type ReferenceProps<T = HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  keyof React.DOMAttributes<T>
> &
  Pick<React.DOMAttributes<T>, 'onMouseOver' | 'onMouseLeave' | 'onClick' | 'onFocus' | 'onBlur'>;

export type FloatingProps<T = HTMLElement> = Omit<
  React.HTMLAttributes<T>,
  keyof React.DOMAttributes<T> | 'style'
> & { style: React.CSSProperties } & Pick<
    React.DOMAttributes<T>,
    'onMouseOver' | 'onMouseLeave' | 'onClick' | 'onAnimationStart' | 'onAnimationEnd'
  >;

export interface UseFloatingWithInteractionsReturn<T extends HTMLElement = HTMLElement> {
  placement: Placement;
  shown: boolean;
  willBeHide: boolean;
  refs: UseFloatingRefs<T>;
  referenceProps: ReferenceProps<T>;
  floatingProps: FloatingProps<T>;
  middlewareData: UseFloatingData['middlewareData'];
  onClose(this: void): void;
  onEscapeKeyDown?(this: void): void;
  onRestoreFocus(this: void): boolean;
}
