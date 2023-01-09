import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import { SelectType, SelectTypography } from '../Select/Select';
import styles from '../Select/Select.module.css';

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLLabelElement>,
    HasAlign,
    Pick<FormFieldProps, 'status'> {
  placeholder?: string;
  multiline?: boolean;
  selectType?: SelectType;
}

export interface SelectState {
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  title?: string;
  notSelected?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/NativeSelect
 */
const NativeSelect = ({
  style,
  defaultValue = '',
  align,
  placeholder,
  children,
  className,
  getRef,
  getRootRef,
  disabled,
  multiline,
  selectType = 'default',
  status,
  onChange: onChangeProp,
  value: valueProp,
  ...restProps
}: NativeSelectProps) => {
  const platform = usePlatform();
  const [title, setTitle] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const [value, onChange] = useEnsuredControl({
    defaultValue,
    disabled,
    onChange: onChangeProp,
    value: valueProp,
  });
  const selectRef = useExternRef(getRef);
  const { sizeX, sizeY } = useAdaptivity();

  useIsomorphicLayoutEffect(() => {
    const selectedOption = selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setEmpty(selectedOption.value === '' && placeholder != null);
    }
  }, [value, children]);

  return (
    <FormField
      Component="label"
      className={classNames(
        styles['Select'],
        getPlatformClassName(styles['Select'], platform),
        empty && styles['Select--empty'],
        multiline && styles['Select--multiline'],
        align && styles[`Select--align-${align}`],
        getSizeXClassName(styles['Select'], sizeX),
        getSizeYClassName(styles['Select'], sizeY),
        className,
      )}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      after={<DropdownIcon />}
      status={status}
    >
      <select
        {...restProps}
        disabled={disabled}
        className={styles['Select__el']}
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <div className={styles['Select__container']}>
        <SelectTypography className={styles['Select__title']} selectType={selectType}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};

export { NativeSelect };
