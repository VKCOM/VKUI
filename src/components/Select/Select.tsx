import * as React from 'react';
import { NativeSelect } from '../NativeSelect/NativeSelect';
import { CustomSelect, SelectProps } from '../CustomSelect/CustomSelect';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { usePlatform } from '../../hooks/usePlatform';
import { classNamesString } from '../../lib/classNames';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './Select.module.css';

export type SelectType = 'default' | 'plain' | 'accent';

/**
 * @see https://vkcom.github.io/VKUI/#/SelectTypography
 */
export const SelectTypography = ({
  selectType = 'default',
  children,
  className,
  ...restProps
}: React.PropsWithChildren<Pick<SelectProps, 'selectType' | 'className'>>) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <span
      className={classNamesString(
        styles['SelectTypography'],
        getPlatformClassName(styles['SelectTypography'], platform),
        getSizeYClassName(styles['SelectTypography'], sizeY),
        styles[`SelectTypography--selectType-${selectType}`],
        className,
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select = ({
  children,
  options = [],
  popupDirection,
  renderOption,
  className,
  ...props
}: SelectProps) => {
  const hasPointer = useAdaptivityHasPointer();

  return (
    <React.Fragment>
      {(hasPointer === undefined || hasPointer) && (
        <CustomSelect
          className={classNamesString(styles['Select__custom'], className)}
          options={options}
          popupDirection={popupDirection}
          renderOption={renderOption}
          {...props}
        />
      )}
      {(hasPointer === undefined || !hasPointer) && (
        <NativeSelect className={classNamesString(styles['Select__native'], className)} {...props}>
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
