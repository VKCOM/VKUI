import { type CustomSelectOptionProps } from '../CustomSelectOption/CustomSelectOption';

export type SelectValue = React.SelectHTMLAttributes<HTMLSelectElement>['value'];

export interface CustomSelectOptionInterface {
  value: SelectValue;
  label: React.ReactElement | string;
  disabled?: boolean;
  [index: string]: any;
}

export interface CustomSelectRenderOption<T extends CustomSelectOptionInterface>
  extends CustomSelectOptionProps {
  option: T;
}
