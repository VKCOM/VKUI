import React, { FunctionComponent, ReactElement } from 'react';
import NativeSelect from '../NativeSelect/NativeSelect';
import CustomSelect, { CustomSelectProps, SelectOption } from '../CustomSelect/CustomSelect';
import { hasMouse } from '@vkontakte/vkjs/lib/InputUtils';

const Select: FunctionComponent<CustomSelectProps> = (props) => {
  // Use custom select if device has connected a mouse
  if (hasMouse) {
    const { children, ...restProps } = props;

    let options: SelectOption[] = [];

    if (Array.isArray(children)) {
      // filter <option> elements from children root and ignore others
      options = children
        .filter((node) => React.isValidElement(node) && node.type === 'option')
        .map((element: ReactElement) => {
          const value = element.props?.value?.toString() ?? '';
          const label = element.props?.children?.toString() ?? '';

          return { value, label };
        });
    }

    const value = restProps.hasOwnProperty('value')
      ? restProps.value
      : restProps.defaultValue;

    return (
      <CustomSelect
        options={options}
        value={value}
        {...restProps}
      />
    );
  }

  const { options, children, ...restProps } = props;

  return (
    <NativeSelect
      {...restProps}>
      {!!children ? children : options.map(({ label, value }, key) => {
        return <option value={`${value}`} key={key}>{label}</option>;
      })}
    </NativeSelect>
  );
};

export default Select;
