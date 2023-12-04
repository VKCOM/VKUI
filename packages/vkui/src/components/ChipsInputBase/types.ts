import * as React from 'react';
import type {
  HasAlign,
  HasComponent,
  HasDataAttribute,
  HasRef,
  HTMLAttributesWithRootRef,
} from '../../types';
import { FormFieldProps } from '../FormField/FormField';

export type ChipValue = React.ReactElement | string | number;

export interface ChipOption {
  value: ChipValue;
  label: string;
  [otherProp: string]: any;
}

export interface ChipProps
  extends HasComponent,
    HasDataAttribute,
    HTMLAttributesWithRootRef<HTMLElement> {
  value?: ChipValue;
  removable?: boolean;
  disabled?: boolean;
  removeAriaLabel?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  onRemove?(event: React.MouseEvent, value: ChipValue): void;
}

export interface RenderChipProps extends ChipProps {
  label?: string;
}

export type RenderChip<O extends ChipOption = ChipOption> = (
  props: RenderChipProps,
  option: O,
) => React.ReactNode;

export type GetOptionValue<O extends ChipOption = ChipOption> = (option: O) => ChipValue;

export type GetOptionLabel<O extends ChipOption = ChipOption> = (option: O) => string;

export type GetNewOptionData<O extends ChipOption = ChipOption> = (
  value: ChipValue,
  label: string,
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

  inputAriaLabel?: string;
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
  onRemoveChipOption(value: O | ChipValue): void;
}
