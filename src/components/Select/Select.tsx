import React, { FunctionComponent, ReactElement, ChangeEvent, useRef } from 'react';
import NativeSelect, { SelectProps } from '../NativeSelect/NativeSelect';
import { CustomSelect } from '../..';
import { SelectOption, SelectChangeResult } from '../CustomSelect/CustomSelect';
import { hasMouse } from '../../helpers/inputUtils';

interface Props extends Omit<SelectProps, 'onChange'> {
  options?: SelectOption[];
  onChange?: (result: SelectChangeResult) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const isCustomScrollbarSupported =
  navigator.userAgent.includes('AppleWebKit') && !navigator.userAgent.includes('Edge') ||
  'scrollbarColor' in document.documentElement.style;

const Select: FunctionComponent<Props> = (props) => {
  const nativeSelectRef = useRef<HTMLSelectElement>();
  const needCustomSelect = isCustomScrollbarSupported && hasMouse;

  if (needCustomSelect) {
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

  const { options, children, onChange, onFocus, onBlur, ...restProps } = props;

  const handleFocus = () => {
    onFocus && onFocus();
  };

  const handleBlur = () => {
    onBlur && onBlur();
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // values from DOM api is always strings
    // search for value from input options if present
    const selectedIndex = nativeSelectRef.current?.selectedIndex ?? -1;

    const value = Array.isArray(options)
      ? options[selectedIndex]?.value
      : e.target.value;

    onChange && onChange({
      value,
      name: e.target.name,
    });
  };

  return (
    <NativeSelect
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      getRef={nativeSelectRef}
      {...restProps}>
      {!!children ? children : options.map(({ label, value }, key) => {
        return <option value={`${value}`} key={key}>{label}</option>;
      })}
    </NativeSelect>
  );
};

export default Select;
