import * as React from 'react';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { CustomSelect, SelectProps } from '../CustomSelect/CustomSelect';
import { NativeSelect } from '../NativeSelect/NativeSelect';

export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select = ({
  children,
  options = [],
  popupDirection,
  renderOption,
  allowClearButton,
  ClearButton,
  ...props
}: SelectProps) => {
  const hasPointer = useAdaptivityHasPointer();

  return (
    <React.Fragment>
      {(hasPointer === undefined || hasPointer) && (
        <CustomSelect
          options={options}
          popupDirection={popupDirection}
          renderOption={renderOption}
          allowClearButton={allowClearButton}
          ClearButton={ClearButton}
          {...props}
        />
      )}
      {(hasPointer === undefined || !hasPointer) && (
        <NativeSelect {...props}>
          {options.map(({ label, value }) => (
            <option value={value} key={`${value}`}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </React.Fragment>
  );
};
