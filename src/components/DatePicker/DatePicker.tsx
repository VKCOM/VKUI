import {
  ChangeEventHandler,
  HTMLAttributes,
  FC,
  useCallback,
  useState,
} from 'react';
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

const MIN_DAY = 1;

export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'min' | 'max'>, HasPlatform, AdaptivityProps {
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

const DatePickerCustom: FC<DatePickerProps & Partial<DatePickerDateFormat>> = ({
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
  const getSafeDate = (date: DatePickerDateFormat): DatePickerDateFormat => {
    const isMaxMonthOutOfRange = max.year === date.year && max.month <= date.month;
    const isMinMonthOutOfRange = min.year === date.year && min.month >= date.month;

    if (isMaxMonthOutOfRange) {
      date.month = max.month;

      if (max.day < date.day) {
        date.day = max.day;
      }
    }

    if (isMinMonthOutOfRange) {
      date.month = min.month;

      if (min.day > date.day) {
        date.day = min.day;
      }
    }

    return date;
  };

  const onSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const date = getSafeDate({
      day,
      month,
      year,
      [e.target.name]: Number(e.target.value),
    });

    onDateChange(date);
  };

  const getAvaliableMaxDay = (): number => {
    if (year === max.year && month === max.month) {
      return max.day;
    }

    return getMonthMaxDay(month, year);
  };

  const getAvaliableMinDay = (): number => {
    if (year === min.year
          && month === min.month
          && min.day
    ) {
      return min.day;
    }

    return MIN_DAY;
  };

  const getAvaliableMonthOptions = () => {
    const currentMonths = monthNames || DefaultMonths;
    const minMonthIndex = year === min.year ? min.month - 1 : 0;
    const maxMonthIndex = year === max.year ? max.month - 1 : currentMonths.length - 1;

    const monthOptions = currentMonths.map((name, index) => ({
      label: name,
      value: index + 1,
    }));

    return monthOptions.filter((_, index) => index >= minMonthIndex && index <= maxMonthIndex);
  };

  const minDay = getAvaliableMinDay();
  const maxDay = getAvaliableMaxDay();

  const dayOptions = range(minDay, maxDay).map((value) => ({
    label: String(value),
    value,
  }));

  const monthOptions = getAvaliableMonthOptions();

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

const DatePickerNative: FC<DatePickerProps & Partial<DatePickerDateFormat>> = ({
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
  const onStringChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
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

const DatePicker: FC<DatePickerProps> = ({ hasMouse, defaultValue, ...props }) => {
  const [value, setValue] = useState<Partial<DatePickerDateFormat>>(defaultValue || {
    day: 0,
    month: 0,
    year: 0,
  });

  const onDateChange = useCallback((update: DatePickerDateFormat) => {
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
