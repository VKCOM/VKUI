import * as React from 'react';
import { NativeSelect } from '../NativeSelect/NativeSelect';
import { CustomSelect, CustomSelectProps } from '../CustomSelect/CustomSelect';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';

export interface SelectProps extends CustomSelectProps, AdaptivityProps {}

export const Select: React.FunctionComponent<SelectProps> = withAdaptivity(({ hasMouse, ...props }: SelectProps) => {
  // Use custom select if device has connected a mouse
  if (hasMouse) {
    const { children, ...restProps } = props;

    return (
      <CustomSelect {...restProps} />
    );
  }

  const { options = [], popupDirection, renderOption, ...restProps } = props;

  return (
    <NativeSelect {...restProps}>
      {options.map(({ label, value }) => <option value={value} key={`${value}`}>{label}</option>)}
    </NativeSelect>
  );
}, {
  hasMouse: true,
});
