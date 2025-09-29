'use client';

import { type ChangeEvent, type ChangeEventHandler, type HTMLAttributes } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { callMultiple } from '../../lib/callMultiple';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasAlign, HasDataAttribute, HasRef, HasRootRef } from '../../types';
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

export const NOT_SELECTED = {
  NATIVE: '__vkui_internal_Select_not_selected__',
  CUSTOM: null,
};

/**
 * @visibleName NativeSelect
 */
export const remapFromSelectValueToNativeValue = (value: SelectValue): NativeSelectValue =>
  value === NOT_SELECTED.CUSTOM ? NOT_SELECTED.NATIVE : value;

export const remapFromNativeValueToSelectValue = (value: NativeSelectValue): SelectValue =>
  value === NOT_SELECTED.NATIVE ? NOT_SELECTED.CUSTOM : value;

type BaseSelectProps = Pick<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'disabled' | 'required' | 'name'
>;

export interface NativeSelectOwnProps {
  /**
   * Выбранное значение.
   *
   * > ⚠️  Важно: При прокидывании `undefined` компонент будет считаться `Uncontrolled`.
   * >
   * > Не используйте `undefined`, чтобы показать невыбранное состояние. Вместо этого используйте `null`.
   */
  value?: SelectValue;
  /**
   * См. `value`.
   */
  defaultValue?: SelectValue;
  /**
   * Обработчик, срабатывающий при изменении выбранного значения.
   * Вторым параметром прокидывается новое значение.
   *
   * > ⚠️ Лучше использовать второй параметр при работе с компонентом.
   */
  onChange?: (e: ChangeEvent<HTMLSelectElement>, newValue: SelectValue) => void;
  /**
   * Текст-подсказка при отсутствии выбранного значения.
   */
  placeholder?: string;
  /**
   * Флаг для включения многострочного режима.
   */
  multiline?: boolean;
  /**
   * Тип селекта, влияющий на отображение.
   */
  selectType?: SelectType;
  /**
   * Иконка раскрывающегося списка.
   */
  icon?: React.ReactNode;
}

export interface NativeSelectProps
  extends BaseSelectProps,
    Omit<HTMLAttributes<HTMLDivElement>, keyof BaseSelectProps | 'onChange' | 'defaultValue'>,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'status'>,
    NativeSelectOwnProps {
  /**
   *
   */
  slotsProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasDataAttribute & HasRootRef<HTMLDivElement>;
    select?: React.SelectHTMLAttributes<HTMLSelectElement> &
      HasDataAttribute &
      HasRootRef<HTMLSelectElement>;
  };
}

/**
 * @see https://vkui.io/components/native-select
 */
export const NativeSelect = ({
  align,
  style,
  className,
  children,
  getRef,
  getRootRef,
  placeholder,
  multiline,
  selectType = 'default',
  status,
  icon = <DropdownIcon />,
  before,

  // NativeSelectProps
  id,
  disabled,
  required,
  name,
  onChange,
  value,
  defaultValue,

  slotsProps,
  ...restProps
}: NativeSelectProps): React.ReactNode => {
  const [title, setTitle] = React.useState('');
  const [empty, setEmpty] = React.useState(false);

  const { getRootRef: getRootComponentRef, ...restRootProps } = slotsProps?.root || {};
  const { getRootRef: getSelectRef, ...restSelectProps } = slotsProps?.select || {};

  const rootRef = useExternRef(getRootRef, getRootComponentRef);
  const selectRef = useExternRef(getRef, getSelectRef);
  const { sizeY = 'none' } = useAdaptivity();

  const checkSelectedOption = () => {
    const selectedOption = selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setEmpty(selectedOption.value === NOT_SELECTED.NATIVE && placeholder != null);
    }
  };

  const _onChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newValue = remapFromNativeValueToSelectValue(e.target.value);
    if (e.target.value === NOT_SELECTED.NATIVE) {
      e.target.value = '';
    }
    if (e.currentTarget.value === NOT_SELECTED.NATIVE) {
      e.currentTarget.value = '';
    }
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
      getRootRef={rootRef}
      disabled={disabled}
      before={before}
      after={icon}
      status={status}
      mode={getFormFieldModeFromSelectType(selectType)}
      {...restProps}
      {...restRootProps}
    >
      <select
        value={value !== undefined ? remapFromSelectValueToNativeValue(value) : value}
        defaultValue={
          defaultValue !== undefined
            ? remapFromSelectValueToNativeValue(defaultValue)
            : defaultValue
        }
        disabled={disabled}
        required={required}
        name={name}
        ref={selectRef}
        id={id}
        {...restSelectProps}
        onChange={callMultiple(_onChange, checkSelectedOption, slotsProps?.select?.onChange)}
        className={classNames(styles.el, slotsProps?.select?.className)}
      >
        {placeholder && <option value={NOT_SELECTED.NATIVE}>{placeholder}</option>}
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
