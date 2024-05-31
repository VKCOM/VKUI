import * as React from 'react';
import { leadingZero } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { range } from '../../helpers/range';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
import { useNativeFormResetListener } from '../../hooks/useNativeFormResetListener';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasOnlyExpectedProps, HTMLAttributesWithRootRef } from '../../types';
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

type DatePickerNormalizedProps = Omit<DatePickerProps, 'defaultValue'> & {
  valuePropName: 'defaultValue' | 'value';
};

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

function getNormalizedDateValue(value?: DatePickerDateFormat, defaultValue?: DatePickerDateFormat) {
  if (value) {
    return { propName: 'value', date: value } as const;
  }
  return { propName: 'defaultValue', date: defaultValue } as const;
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
  value: valueProp = DEFAULT_EMPTY_DATE,
  monthNames,
  onDateChange,
  disabled,
  valuePropName,
  ...restProps
}: DatePickerNormalizedProps) => {
  const [value, setValue] = React.useState<DatePickerDateFormat>(() => valueProp);
  const hiddenInput = React.useRef<HTMLInputElement>(null);

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const nextDate = {
      day: value.day,
      month: value.month,
      year: value.year,
    };
    nextDate[e.target.name as keyof typeof nextDate] = Number(e.target.value);
    nextDate.day = clamp(nextDate.day, 1, getMonthMaxDay(nextDate.month, nextDate.year));
    setValue(nextDate);
    onDateChange?.(nextDate);
  };
  const dayOptions = range(1, getMonthMaxDay(value.month, value.year)).map((value) => ({
    label: String(value),
    value,
  }));
  const monthOptions = (monthNames || DefaultMonths).map((name, index) => ({
    label: name,
    value: index + 1,
  }));
  const yearOptions = range(max.year, min.year).map((value) => ({
    label: String(value),
    value: value,
  }));

  useIsomorphicLayoutEffect(() => {
    if (valuePropName === 'value') {
      setValue(valueProp || DEFAULT_EMPTY_DATE);
    }
  }, [valueProp]);

  useNativeFormResetListener(hiddenInput, () => {
    if (valuePropName === 'defaultValue') {
      setValue(valueProp);
    }
  });

  return (
    <RootComponent baseClassName={styles['DatePicker']} {...restProps}>
      <div className={styles['DatePicker__container']}>
        <div className={styles['DatePicker__day']}>
          <CustomSelect
            name="day"
            value={value.day}
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
            value={value.month}
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
            value={value.year}
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
        {...{ [valuePropName]: convertToInputFormat(value) }}
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
  value = DEFAULT_EMPTY_DATE,
  valuePropName,
  onDateChange,
  ...restProps
}: DatePickerNormalizedProps) => {
  const onStringChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onDateChange?.(parseInputDate(e.currentTarget.value));
    },
    [onDateChange],
  );
  const inputProps: HasOnlyExpectedProps<typeof restProps, InputProps> = restProps;
  return (
    <Input
      {...inputProps}
      type="date"
      onChange={onStringChange}
      min={convertToInputFormat(min)}
      max={convertToInputFormat(max)}
      {...{ [valuePropName]: convertToInputFormat(value) }}
    />
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/DatePicker
 */
export const DatePicker = ({ onDateChange, defaultValue, value, ...props }: DatePickerProps) => {
  const hasPointer = useAdaptivityHasPointer();

  const onChange = (update: DatePickerDateFormat) => {
    onDateChange && onDateChange({ ...update });
  };

  const { propName, date } = getNormalizedDateValue(value, defaultValue);

  const Cmp = hasPointer ? DatePickerCustom : DatePickerNative;
  return <Cmp {...props} onDateChange={onChange} value={date} valuePropName={propName} />;
};
