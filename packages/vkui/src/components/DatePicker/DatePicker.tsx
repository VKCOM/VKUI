import * as React from 'react';
import { leadingZero } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { range } from '../../helpers/range';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { useNativeFormResetListener } from '../../hooks/useNativeFormResetListener';
import type { HasOnlyExpectedProps, HTMLAttributesWithRootRef } from '../../types';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Input, type InputProps } from '../Input/Input';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './DatePicker.module.css';

const DefaultMonths: string[] = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

export type DatePickerDateFormat = {
  day: number;
  month: number;
  year: number;
};

const DEFAULT_EMPTY_DATE = { day: 0, month: 0, year: 0 };

export interface DatePickerProps
  extends Omit<
    HTMLAttributesWithRootRef<HTMLDivElement>,
    'defaultValue' | 'value' | 'min' | 'max'
  > {
  min?: DatePickerDateFormat;
  max?: DatePickerDateFormat;
  name?: string;
  defaultValue?: DatePickerDateFormat;
  value?: DatePickerDateFormat;
  popupDirection?: 'top' | 'bottom';
  monthNames?: string[];
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  onDateChange?: (value: DatePickerDateFormat) => void; // TODO [>=7] заменить на onChange
  disabled?: boolean;
}

// Переводим state к формату гг-мм-дд
function convertToInputFormat(value: Partial<DatePickerDateFormat> | undefined) {
  if (!value) {
    return undefined;
  }
  const { day = 0, month = 0, year = 0 } = value;
  return `${year}-${leadingZero(month)}-${leadingZero(day)}`;
}

// Переводим дату формата гг-мм-дд к объекту
function parseInputDate(date: string): DatePickerDateFormat {
  if (date.length === 0) {
    return DEFAULT_EMPTY_DATE;
  }
  const splited = date.split('-');

  return {
    day: Number(splited[2]),
    month: Number(splited[1]),
    year: Number(splited[0]),
  };
}

function getMonthMaxDay(month?: number, year?: number) {
  return month ? new Date(year || 2016, month, 0).getDate() : 31;
}

const DatePickerCustom = ({
  name,
  min = { day: 0, month: 0, year: 0 },
  max = { day: 31, month: 12, year: 2100 },
  dayPlaceholder,
  monthPlaceholder,
  yearPlaceholder,
  popupDirection,
  value,
  monthNames,
  onDateChange,
  disabled,
  defaultValue = DEFAULT_EMPTY_DATE,
  ...restProps
}: DatePickerProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useCustomEnsuredControl({ value, defaultValue });
  const hiddenInput = React.useRef<HTMLInputElement>(null);

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const nextDate = {
      day: internalValue.day,
      month: internalValue.month,
      year: internalValue.year,
    };
    nextDate[e.target.name as keyof typeof nextDate] = Number(e.target.value);
    nextDate.day = nextDate.day
      ? clamp(nextDate.day, 1, getMonthMaxDay(nextDate.month, nextDate.year))
      : nextDate.day;
    setInternalValue(nextDate);
    onDateChange?.(nextDate);
  };
  const dayOptions = range(1, getMonthMaxDay(internalValue.month, internalValue.year)).map(
    (value) => ({
      label: String(value),
      value,
    }),
  );
  const monthOptions = (monthNames || DefaultMonths).map((name, index) => ({
    label: name,
    value: index + 1,
  }));
  const yearOptions = range(max.year, min.year).map((value) => ({
    label: String(value),
    value: value,
  }));

  useNativeFormResetListener(hiddenInput, () => {
    if (!isControlled) {
      setInternalValue(defaultValue);
    }
  });

  return (
    <RootComponent baseClassName={styles['DatePicker']} {...restProps}>
      <div className={styles['DatePicker__container']}>
        <div className={styles['DatePicker__day']}>
          <CustomSelect
            name="day"
            value={internalValue.day}
            options={dayOptions}
            placeholder={dayPlaceholder}
            popupDirection={popupDirection}
            onChange={onSelectChange}
            disabled={disabled}
          />
        </div>
        <div className={styles['DatePicker__month']}>
          <CustomSelect
            className={styles['DatePicker__monthSelect']}
            name="month"
            value={internalValue.month}
            options={monthOptions}
            placeholder={monthPlaceholder}
            popupDirection={popupDirection}
            onChange={onSelectChange}
            disabled={disabled}
          />
        </div>
        <div className={styles['DatePicker__year']}>
          <CustomSelect
            name="year"
            value={internalValue.year}
            options={yearOptions}
            placeholder={yearPlaceholder}
            popupDirection={popupDirection}
            onChange={onSelectChange}
            disabled={disabled}
          />
        </div>
      </div>
      <input
        type="hidden"
        name={name}
        ref={hiddenInput}
        value={convertToInputFormat(internalValue)}
      />
    </RootComponent>
  );
};

const DatePickerNative = ({
  min = { day: 0, month: 0, year: 0 },
  max = { day: 31, month: 12, year: 2100 },
  monthNames,
  popupDirection,
  dayPlaceholder,
  monthPlaceholder,
  yearPlaceholder,
  value,
  defaultValue = DEFAULT_EMPTY_DATE,
  onDateChange,
  ...restProps
}: DatePickerProps) => {
  const onStringChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onDateChange?.(parseInputDate(e.currentTarget.value));
    },
    [onDateChange],
  );
  const inputProps: HasOnlyExpectedProps<
    typeof restProps & Pick<InputProps, 'value' | 'defaultValue'>,
    InputProps
  > = restProps;

  const valueProps = value
    ? { value: convertToInputFormat(value) }
    : { defaultValue: convertToInputFormat(defaultValue) };

  return (
    <Input
      {...inputProps}
      {...valueProps}
      type="date"
      onChange={onStringChange}
      min={convertToInputFormat(min)}
      max={convertToInputFormat(max)}
    />
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/DatePicker
 *
 * @deprecated 6.2.0
 *
 * Компонент устарел и будет удален в v7. Используйте вместо него компоненты
 * [Input](https://vkcom.github.io/VKUI/#/Input) и
 * [Select](https://vkcom.github.io/VKUI/#/Select).
 */
export const DatePicker = ({ onDateChange, ...props }: DatePickerProps): React.ReactNode => {
  const hasPointer = useAdaptivityHasPointer();

  const onChange = (update: DatePickerDateFormat) => {
    onDateChange && onDateChange({ ...update });
  };

  const Cmp = hasPointer ? DatePickerCustom : DatePickerNative;
  return <Cmp {...props} onDateChange={onChange} />;
};
