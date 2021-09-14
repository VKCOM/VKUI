import * as React from 'react';
import Input from '../Input/Input';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { leadingZero } from '../../lib/utils';
import CustomSelect from '../CustomSelect/CustomSelect';
import './DatePicker.css';

const DefaultMonths: string[] = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
];

export type DatePickerDateFormat = {
  day: number;
  month: number;
  year: number;
};

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'min' | 'max'>, HasPlatform, AdaptivityProps {
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
function convertToInputFormat({ day, month, year }: Partial<DatePickerDateFormat>) {
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

const range = (start: number, end: number) => {
  const swap = start > end;
  const arr = [];
  for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
    arr.push(i);
  }
  return swap ? arr.reverse() : arr;
};

const DatePickerCustom: React.FC<DatePickerProps & Partial<DatePickerDateFormat>> = ({
  name, min, max,
  dayPlaceholder, monthPlaceholder, yearPlaceholder,
  popupDirection,
  defaultValue,
  hasMouse,
  monthNames,
  day, month, year,
  onDateChange,
  disabled,
  ...restProps
}) => {
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    onDateChange({
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
    <div vkuiClass="DatePicker" {...restProps}>
      <div vkuiClass="DatePicker__container">
        <div vkuiClass="DatePicker__day">
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
        <div vkuiClass="DatePicker__month">
          <CustomSelect
            vkuiClass="DatePicker__monthSelect"
            name="month"
            value={month}
            options={monthOptions}
            placeholder={monthPlaceholder}
            popupDirection={popupDirection}
            onChange={onSelectChange}
            disabled={disabled}
          />
        </div>
        <div vkuiClass="DatePicker__year">
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
    </div>
  );
};

const DatePickerNative: React.FC<DatePickerProps & Partial<DatePickerDateFormat>> = ({
  min, max,
  dayPlaceholder, monthPlaceholder, yearPlaceholder,
  popupDirection,
  defaultValue,
  hasMouse,
  day, month, year,
  onDateChange,
  ...restProps
}) => {
  const defProps = day && month && year
    ? { defaultValue: convertToInputFormat({ day, month, year }) }
    : {};
  const onStringChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback((e) => {
    onDateChange(parseInputDate(e.currentTarget.value));
  }, [onDateChange]);
  return (
    <Input
      {...restProps}
      type="date"
      onChange={onStringChange}
      min={convertToInputFormat(min)}
      max={convertToInputFormat(max)}
      {...defProps}
    />
  );
};

const DatePicker: React.FC<DatePickerProps> = ({ hasMouse, defaultValue, ...props }) => {
  const [value, setValue] = React.useState<Partial<DatePickerDateFormat>>(defaultValue || {
    day: 0,
    month: 0,
    year: 0,
  });

  const onDateChange = React.useCallback((update: DatePickerDateFormat) => {
    setValue(update);
    props.onDateChange && props.onDateChange({ ...update });
  }, [props.onDateChange]);

  const Cmp = hasMouse ? DatePickerCustom : DatePickerNative;
  return <Cmp {...props} {...value} onDateChange={onDateChange} />;
};

DatePicker.defaultProps = {
  min: { day: 0, month: 0, year: 0 },
  max: { day: 31, month: 12, year: 2100 },
};

export default withAdaptivity(DatePicker, {
  hasMouse: true,
});
