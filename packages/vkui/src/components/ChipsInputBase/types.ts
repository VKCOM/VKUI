import * as React from 'react';
import type {
  HasAlign,
  HasComponent,
  HasDataAttribute,
  HasRef,
  HTMLAttributesWithRootRef,
} from '../../types';
import { FormFieldProps } from '../FormField/FormField';

export type NavigateTo = 'first' | 'prev' | 'next' | 'last';

export type ChipOptionValue = string | number;

export type ChipOptionLabel = React.ReactElement | string | number;

export type ChipOption = {
  value: ChipOptionValue;
  label: ChipOptionLabel;
  disabled?: boolean;
  [index: string]: any;
};

export interface ChipProps
  extends HasComponent,
    HasDataAttribute,
    HTMLAttributesWithRootRef<HTMLElement> {
  value?: ChipOptionValue;
  removable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  removeLabel?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onRemove?(event: React.MouseEvent, value: ChipOptionValue): void;
}

export interface RenderChipProps extends ChipProps {
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
  disabled?: boolean;

  value?: O[];
  defaultValue?: O[];
  onChange?: OnChange<O>;

  inputValue?: string;
  defaultInputValue?: string;
  onInputChange?: OnInputChange;
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
  getRootRef?: React.Ref<HTMLDivElement>;
  /**
   * Добавляет значение в список на событие `onBlur`
   */
  addOnBlur?: boolean;
  /**
   * Render prop функция для возврата своего компонента.
   *
   * @default Используется [Chip](#/Chip)
   */
  renderChip?: RenderChip;
}

/**
 * @private
 */
export interface ChipsInputBasePrivateProps<O extends ChipOption = ChipOption>
  extends ChipsInputBaseProps<O>,
    Pick<FormFieldProps, 'mode' | 'status' | 'before' | 'after'> {
  onAddChipOption(value: O | string): void;
  onRemoveChipOption(value: O | ChipOptionValue): void;
}
