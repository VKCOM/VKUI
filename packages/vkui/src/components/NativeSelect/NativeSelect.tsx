import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useExternRef } from '../../hooks/useExternRef';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  ['compact']: styles.hostSizeYCompact,
};

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'multiple'>,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'status'> {
  placeholder?: string;
  multiline?: boolean;
  selectType?: SelectType;
  /**
   * Иконка раскрывающегося списка
   */
  icon?: React.ReactNode;
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
  icon = <DropdownIcon />,
  before,
  onChange: onChangeProp,
  value: valueProp,
  ...restProps
}: NativeSelectProps) => {
  const [title, setTitle] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const [value, onChange] = useEnsuredControl({
    defaultValue,
    disabled,
    onChange: onChangeProp,
    value: valueProp,
  });
  const selectRef = useExternRef(getRef);
  const { sizeY = 'none' } = useAdaptivity();

  useIsomorphicLayoutEffect(() => {
    const selectedOption = selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setEmpty(selectedOption.value === '' && placeholder != null);
    }
  }, [value, children]);

  return (
    <FormField
      Component="div"
      className={classNames(
        styles.host,
        'vkuiInternalNativeSelect',
        before && styles.hostHasBefore,
        empty && styles.hostEmpty,
        multiline && styles.hostMultiline,
        align === 'center' && styles.hostAlignCenter,
        align === 'right' && styles.hostAlignRight,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        className,
      )}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      before={before}
      after={icon}
      status={status}
      mode={getFormFieldModeFromSelectType(selectType)}
    >
      <select
        {...restProps}
        disabled={disabled}
        className={styles.el}
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <div className={styles.container} aria-hidden>
        <SelectTypography className={styles.title} selectType={selectType}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};

export { NativeSelect };
