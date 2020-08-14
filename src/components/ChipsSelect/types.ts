import { ChipsInputOption, ChipsInputProps } from '../ChipsInput/ChipsInput';
import { SizeType } from '../..';

export interface ChipsSelectProps<Option extends ChipsInputOption> extends ChipsInputProps<Option> {
  popupDirection?: 'top' | 'bottom';
  options?: Option[];
  sizeY?: SizeType;
  filterFn?: (value?: string, option?: Option, getOptionLabel?: Pick<ChipsInputProps<ChipsInputOption>, 'getOptionLabel'>['getOptionLabel']) => boolean;
  creatable?: boolean;
}

export type MobileChipsSelectProps<T> = Partial<ChipsSelectProps<T>>;
