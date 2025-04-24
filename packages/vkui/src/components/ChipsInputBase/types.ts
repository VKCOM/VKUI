import type * as React from 'react';
import type {
  HasAlign,
  HasComponent,
  HasDataAttribute,
  HasRef,
  HTMLAttributesWithRootRef,
} from '../../types';
import { type FormFieldProps } from '../FormField/FormField';
import { type FormFieldClearButtonProps } from '../FormFieldClearButton/FormFieldClearButton';

export type NavigateTo = 'prev' | 'next' | 'last';

export type ChipOptionValue = string | number;

export type ChipOptionLabel = React.ReactElement | string | number;

export type ChipOption = {
  /**
   * Значение опции.
   */
  value: ChipOptionValue;
  /**
   * Отображаемый текст опции.
   */
  label: ChipOptionLabel;
  /**
   * Блокировка взаимодействия с оцией.
   */
  disabled?: boolean;
  [index: string]: any;
};

export interface ChipProps
  extends HasComponent,
    HasDataAttribute,
    HTMLAttributesWithRootRef<HTMLElement> {
  /**
   * Значение чипа.
   */
  value?: ChipOptionValue;
  /**
   * Можно ли удалить чип.
   */
  removable?: boolean;
  /**
   * Блокировка взаимодействия с чипом.
   */
  disabled?: boolean;
  /**
   * Режим только для чтения.
   */
  readOnly?: boolean;
  /**
   * Текст для кнопки удаления.
   */
  removeLabel?: string;
  /**
   * Контент перед основным содержимым.
   */
  before?: React.ReactNode;
  /**
   * Контент после основного содержимого.
   */
  after?: React.ReactNode;
  /**
   * Обработчик удаления чипа.
   */
  onRemove?: (event: React.MouseEvent, value: ChipOptionValue) => void;
}

export interface RenderChipProps extends ChipProps {
  /**
   * Отображаемый текст чипа.
   */
  label: ChipOptionLabel;
}

export type RenderChip<O extends ChipOption = ChipOption> = (
  props: RenderChipProps,
  option: O,
) => React.ReactNode;

export type GetOptionValue<O extends ChipOption = ChipOption> = (option: O) => ChipOptionValue;

export type GetOptionLabel<O extends ChipOption = ChipOption> = (option: O) => ChipOptionLabel;

export type GetNewOptionData<O extends ChipOption = ChipOption> = (
  value: ChipOptionValue,
  label: ChipOptionLabel,
) => O;

export type OnChange<O extends ChipOption = ChipOption> = (value: O[]) => void;

export type OnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

/**
 * @public
 */
export interface UseChipsInputBaseProps<O extends ChipOption = ChipOption> {
  /**
   * Блокировка взаимодействия с компонентом.
   */
  disabled?: boolean;
  /**
   * Выбранные опции.
   */
  value?: O[];
  /**
   * Выбранные опции по умолчанию.
   */
  defaultValue?: O[];
  /**
   * Обработчик изменения выбранных опций.
   */
  onChange?: OnChange<O>;
  /**
   * Значение поля ввода.
   */
  inputValue?: string;
  /**
   * Значение поля ввода по умолчанию.
   */
  defaultInputValue?: string;
  /**
   * Обработчик изменения значения в поле ввода.
   */
  onInputChange?: OnInputChange;
  /**
   * Символ или строка, которая будет использоваться как разделитель для автоматического создания опций из текста, введенного в поле ввода.
   *
   * Работает в двух сценариях:
   * 1. При вводе разделителя - текст до разделителя автоматически преобразуется в новую опцию.
   *    Например, при `delimiter=","` ввод "опция1," создаст опцию "опция1".
   *
   * 2. При вставке из буфера обмена - если вставляемый текст содержит разделители,
   *    он будет автоматически разбит на несколько опций.
   *    Например, при `delimiter=","` вставка "опция1,опция2,опция3" создаст
   *    три отдельные опции: "опция1", "опция2" и "опция3".
   */
  delimiter?: string;
}

/**
 * @private
 */
type UseChipsInputBaseOnlyNeededProps<O extends ChipOption = ChipOption> = Omit<
  UseChipsInputBaseProps<O>,
  'onChange' | 'defaultValue' | 'defaultInputValue'
>;

/**
 * @public
 */
export interface ChipsInputBaseProps<O extends ChipOption = ChipOption>
  extends UseChipsInputBaseOnlyNeededProps<O>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      keyof UseChipsInputBaseProps<O> | 'defaultChecked'
    >,
    HasRef<HTMLInputElement>,
    HasAlign {
  /**
   * Ссылка на корневой элемент.
   */
  getRootRef?: React.Ref<HTMLDivElement>;
  /**
   * Добавляет значение в список на событие `onBlur`.
   */
  addOnBlur?: boolean;
  /**
   * Render prop функция для возврата своего компонента.
   *
   * @default Используется [Chip](#/Chip)
   */
  renderChip?: RenderChip<O>;
  /**
   * Показывать ли кнопку для очистки значения.
   */
  clearButtonShown?: boolean;
  /**
   * (e2e) testId кнопки очистки.
   */
  clearButtonTestId?: string;
  /**
   * Кастомная кнопка для очистки значения.
   * Должна принимать обязательное свойство `onClick`.
   */
  ClearButton?: React.ComponentType<FormFieldClearButtonProps>;
}

/**
 * @private
 */
export interface ChipsInputBasePrivateProps<O extends ChipOption = ChipOption>
  extends ChipsInputBaseProps<O>,
    Pick<FormFieldProps, 'mode' | 'status' | 'before' | 'after' | 'maxHeight'> {
  /**
   * Обработчик очистки всех выбранных опций.
   */
  onClear: () => void;
  /**
   * Обработчик добавления новой опции чипа.
   */
  onAddChipOption: (value: string) => void;
  /**
   * Обработчик удаления опции чипа.
   */
  onRemoveChipOption: (value: O | ChipOptionValue) => void;
}
