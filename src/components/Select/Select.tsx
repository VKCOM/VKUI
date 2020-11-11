import React, { FunctionComponent, ReactElement } from 'react';
import NativeSelect, { NativeSelectProps } from '../NativeSelect/NativeSelect';
import CustomSelect, { SelectOption } from '../CustomSelect/CustomSelect';
import { hasMouse } from '@vkontakte/vkjs/lib/InputUtils';

const Select: FunctionComponent<NativeSelectProps> = (props) => {
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

  const { children, ...restProps } = props;

  return (
    <NativeSelect {...restProps}>
      {children}
    </NativeSelect>
  );
};

export default Select;
