import React, { FunctionComponent } from 'react';
import NativeSelect from '../NativeSelect/NativeSelect';
import CustomSelect, { CustomSelectProps } from '../CustomSelect/CustomSelect';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

const Select: FunctionComponent<CustomSelectProps & AdaptivityProps> = ({ hasMouse, ...props }) => {
  // Use custom select if device has connected a mouse
  if (hasMouse) {
    const { children, ...restProps } = props;

    const value = restProps.hasOwnProperty('value')
      ? restProps.value
      : restProps.defaultValue;

    return (
      <CustomSelect
        value={value}
        {...restProps}
      />
    );
  }

  const { options, popupDirection, renderOption, ...restProps } = props;

  return (
    <NativeSelect {...restProps}>
      {options.map(({ label, value }) => <option value={value} key={`${value}`}>{label}</option>)}
    </NativeSelect>
  );
};

export default withAdaptivity(Select, {
  hasMouse: true,
});
