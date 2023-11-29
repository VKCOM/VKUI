import type { UseFloatingMiddlewaresBootstrapOptions } from '../useFloatingMiddlewaresBootstrap';

export type InteractiveTriggerType = 'click' | 'hover' | 'focus';

export type ManualTriggerType = 'manual';

export type TriggerType = ManualTriggerType | InteractiveTriggerType | InteractiveTriggerType[];

export type ShownChangeReason = 'click-outside' | 'escape-key' | 'click' | 'hover' | 'focus';

export interface UseFloatingWithInteractionsProps
  extends Pick<
    UseFloatingMiddlewaresBootstrapOptions,
    'placement' | 'offsetByMainAxis' | 'offsetByCrossAxis'
  > {
  /**
   * Механика вызова всплывающего окна.
   *
   * - `"click"` – показывается/скрывается только при нажатии.
   * - `"hover"` – будет показываться/скрывается при наведении/отведении мыши.
   * - `"focus"` – будет показываться/скрывается при фокусе/потере фокуса мыши.
   * - `"manual"` – будет показываться/скрывается только через параметр `shown`. `onShownChange` будет
   *    вызываться при нажатии за пределы целевого и всплывающего элемента, а также по кнопке ESC.

   * > ⚠️`"hover"` на тач-устройствах будет работать как `"click"`, с одним лишь нюансом, что не будет закрываться
   * > при повторном нажатии на целевой элемент. Для закрытия необходимо нажать на область вне целевого элемента
   * > и выпадающего окна.
   */
  trigger?: TriggerType;
  /**
   * Количество миллисекунд, после которых произойдёт показ/скрытие всплывающего окна при наведении.
   *
   * > Чтобы задать разное время на показ и скрытие, передайте массив типа `[<показ>, <скрытие>]`.
   *
   * > Используется только для `trigger="hover"`.
   */
  hoverDelay?: number | [number, number];
  /**
   * Содержимое всплывающего окна.
   */
  content?: React.ReactNode;
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
   * Начальное состояние всплывающего окна.
   */
  defaultShown?: boolean;
  /**
   * Если передан, то всплывающее окно будет показано/скрыто в зависимости от значения свойства.
   */
  shown?: boolean;
  /**
   * Вызывается при каждом изменении видимости всплывающего окна.
   */
  onShownChange?(shown: boolean): void;
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
