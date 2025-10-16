'use client';

import { type ChangeEvent, type ChangeEventHandler } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { callMultiple } from '../../lib/callMultiple';
import { getFormFieldModeFromSelectType } from '../../lib/select';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import type { HasAlign, HasDataAttribute, HasRootRef } from '../../types';
import { DropdownIcon } from '../DropdownIcon/DropdownIcon';
import { FormField, type FormFieldProps } from '../FormField/FormField';
import { RootComponent } from '../RootComponent/RootComponent';
import type { SelectType } from '../Select/Select';
import { SelectTypography } from '../SelectTypography/SelectTypography';
import styles from '../Select/Select.module.css';

const warn = warnOnce('NativeSelect');

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

export type NativeHTMLSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'multiple' | 'value' | 'defaultValue' | 'onChange'
>;

export interface NativeSelectProps
  extends NativeHTMLSelectProps,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    Pick<FormFieldProps, 'before' | 'status'> {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `select`: свойства для прокидывания в нативный `select`.
   */
  slotProps?: {
    root?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
      HasDataAttribute &
      HasRootRef<HTMLDivElement>;
    select?: NativeHTMLSelectProps & HasRootRef<HTMLSelectElement> & HasDataAttribute;
  };
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ select: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLSelectElement>;
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

/**
 * @see https://vkui.io/components/native-select
 */
export const NativeSelect = ({
  style: rootStyle,
  className: rootClassName,
  getRootRef: rootGetRootRef,
  align,
  placeholder,
  children,
  getRef,
  multiline,
  selectType = 'default',
  status,
  icon = <DropdownIcon />,
  before,
  onChange,
  value,
  defaultValue,

  slotProps,
  ...restProps
}: NativeSelectProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ select: { getRootRef: ... } }`');
  }

  const [title, setTitle] = React.useState('');
  const [empty, setEmpty] = React.useState(false);
  const { sizeY = 'none' } = useAdaptivity();

  const { className, style, getRootRef, ...rootRest } = useMergeProps(
    { style: rootStyle, className: rootClassName, getRootRef: rootGetRootRef },
    slotProps?.root,
  );

  const { getRootRef: getSelectRef, ...selectRest } = useMergeProps(
    { getRootRef: getRef, ...restProps },
    slotProps?.select,
  );

  const selectRef = useExternRef(getSelectRef);

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
      getRootRef={getRootRef}
      disabled={selectRest.disabled}
      before={before}
      after={icon}
      status={status}
      mode={getFormFieldModeFromSelectType(selectType)}
      {...rootRest}
    >
      <RootComponent
        Component="select"
        baseClassName={styles.el}
        value={value !== undefined ? remapFromSelectValueToNativeValue(value) : value}
        defaultValue={
          defaultValue !== undefined
            ? remapFromSelectValueToNativeValue(defaultValue)
            : defaultValue
        }
        onChange={callMultiple(_onChange, checkSelectedOption)}
        getRootRef={selectRef}
        {...selectRest}
      >
        {placeholder && <option value={NOT_SELECTED.NATIVE}>{placeholder}</option>}
        {children}
      </RootComponent>
      <div className={styles.container} aria-hidden>
        <SelectTypography className={styles.title} selectType={selectType}>
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};
