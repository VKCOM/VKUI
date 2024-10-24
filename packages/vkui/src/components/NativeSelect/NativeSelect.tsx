'use client';

import { type ChangeEvent, type ChangeEventHandler } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasAlign, HasRef, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export type SelectValue = Exclude<
  React.SelectHTMLAttributes<HTMLSelectElement>['value'],
  undefined
> | null;

export type NativeSelectValue = Exclude<SelectValue, null>;

export interface NativeSelectProps
  extends Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      'multiple' | 'value' | 'defaultValue' | 'onChange'
    >,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'status'> {
  /**
   * Выбранное значение.
   *
   * > ⚠️  Важно: При прокидывании `undefined` компонент будет считаться `Uncontrolled`.
   * >
   * > Не используйте `undefined`, чтобы показать невыбранное состояние. Вместо этого используйте `null`
   */
  value?: SelectValue;
  /**
   * см. `value`
   */
  defaultValue?: SelectValue;
  /**
   * Коллбэк срабатывающий при изменении выбранного значения.
   * Вторым параметром прокидывается новое значение.
   *
   * > ⚠️  Важно: Лучше использовать второй параметр для получения нового значения
   */
  onChange?: (e: ChangeEvent<HTMLSelectElement>, newValue: SelectValue) => void;
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
  onChange,
  value,
  defaultValue,
  ...restProps
}: NativeSelectProps): React.ReactNode => {
  const [title, setTitle] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const selectRef = useExternRef(getRef);
  const { sizeY = 'none' } = useAdaptivity();

  const checkSelectedOption = () => {
    const selectedOption = selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setEmpty(selectedOption.value === '' && placeholder != null);
    }
  };

  const _onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newValue = e.target.value || null;
    onChange?.(e, newValue);
  };
  useIsomorphicLayoutEffect(checkSelectedOption, [children]);

  return (
    <FormField
      Component="div"
      className={classNames(
        styles.host,
        'vkuiInternalNativeSelect',
        before && styles.hasBefore,
        empty && styles.empty,
        multiline && styles.multiline,
        align === 'center' && styles.alignCenter,
        align === 'right' && styles.alignRight,
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
        value={value === null ? '' : value}
        defaultValue={defaultValue === null ? '' : defaultValue}
        disabled={disabled}
        className={styles.el}
        onChange={callMultiple(_onChange, checkSelectedOption)}
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
