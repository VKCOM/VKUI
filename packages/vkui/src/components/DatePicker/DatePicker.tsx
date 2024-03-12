import * as React from 'react';
import { leadingZero } from '@vkontakte/vkjs';
import { range } from '../../helpers/range';
import { useAdaptivityHasPointer } from '../../hooks/useAdaptivityHasPointer';
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

export interface DatePickerProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'defaultValue' | 'min' | 'max'> {
  min?: DatePickerDateFormat;
  max?: DatePickerDateFormat;
  name?: string;
  defaultValue?: DatePickerDateFormat;
  popupDirection?: 'top' | 'bottom';
  monthNames?: string[];
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  onDateChange?: (value: DatePickerDateFormat) => void;
  disabled?: boolean;
}

// Переводим state к формату гг-мм-дд
function convertToInputFormat({ day = 0, month = 0, year = 0 }: Partial<DatePickerDateFormat>) {
  return `${year}-${leadingZero(month)}-${leadingZero(day)}`;
}

// Переводим дату формата гг-мм-дд к объекту
function parseInputDate(date: string): DatePickerDateFormat {
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
  defaultValue,
  monthNames,
  day = 0,
  month = 0,
  year = 0,
  onDateChange,
  disabled,
  ...restProps
}: DatePickerProps & Partial<DatePickerDateFormat>) => {
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onDateChange?.({
      day,
      month,
      year,
      [e.target.name]: Number(e.target.value),
    });
  };
  const dayOptions = range(1, getMonthMaxDay(month, year)).map((value) => ({
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
  return (
    <RootComponent baseClassName={styles['DatePicker']} {...restProps}>
      <div className={styles['DatePicker__container']}>
        <div className={styles['DatePicker__day']}>
          <CustomSelect
            name="day"
            value={day}
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
            value={month}
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
            value={year}
            options={yearOptions}
            placeholder={yearPlaceholder}
            popupDirection={popupDirection}
            onChange={onSelectChange}
            disabled={disabled}
          />
        </div>
      </div>
      <input type="hidden" name={name} value={convertToInputFormat({ day, month, year })} />
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
  defaultValue,
  day,
  month,
  year,
  onDateChange,
  ...restProps
}: DatePickerProps & Partial<DatePickerDateFormat>) => {
  const defProps =
    day && month && year ? { defaultValue: convertToInputFormat({ day, month, year }) } : {};
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
      {...defProps}
    />
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/DatePicker
 */
export const DatePicker = ({ defaultValue, ...props }: DatePickerProps) => {
  const hasPointer = useAdaptivityHasPointer();
  const [value, setValue] = React.useState<Partial<DatePickerDateFormat>>(() => ({
    day: defaultValue?.day || 0,
    month: defaultValue?.month || 0,
    year: defaultValue?.year || 0,
  }));

  const onDateChange = React.useCallback(
    (update: DatePickerDateFormat) => {
      setValue(update);
      props.onDateChange && props.onDateChange({ ...update });
    },
    [props],
  );

  const Cmp = hasPointer ? DatePickerCustom : DatePickerNative;
  return <Cmp {...props} {...value} onDateChange={onDateChange} />;
};
