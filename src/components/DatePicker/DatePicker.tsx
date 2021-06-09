import {
  Component,
  ChangeEventHandler,
  HTMLAttributes,
  FC,
} from 'react';
import Input from '../Input/Input';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { leadingZero } from '../../lib/utils';
import CustomSelect from '../CustomSelect/CustomSelect';

const DefaultMonths: string[] = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
];

export type DatePickerDateFormat = {
  day: number;
  month: number;
  year: number;
};

type DatePickerState = Partial<DatePickerDateFormat>;

export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'min' | 'max'>, HasPlatform, AdaptivityProps {
  min: DatePickerDateFormat;
  max: DatePickerDateFormat;
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
  const onSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
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

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  constructor(props: DatePickerProps) {
    super(props);

    this.state = props.defaultValue ? props.defaultValue : {
      day: 0,
      month: 0,
      year: 0,
    };
  }

  static defaultProps = {
    min: { day: 0, month: 0, year: 0 },
    max: { day: 31, month: 12, year: 2100 },
  };

  onDateChange = (update: DatePickerDateFormat) => {
    this.setState(update);
    this.props.onDateChange && this.props.onDateChange({ ...update });
  };

  onStringChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    this.onDateChange(parseInputDate(e.currentTarget.value));
  };

  nativeView() {
    const {
      name, min, max,
      dayPlaceholder, monthPlaceholder, yearPlaceholder,
      popupDirection,
      defaultValue,
      hasMouse,
      ...restProps
    } = this.props;
    const { day, month, year } = this.state;

    if (day && month && year) {
      return (
        <Input
          {...restProps}
          name={name}
          type="date"
          defaultValue={convertToInputFormat(this.state as DatePickerState)}
          onChange={this.onStringChange}
          min={convertToInputFormat(min)}
          max={convertToInputFormat(max)}
        />
      );
    }

    return (
      <Input
        {...restProps}
        name={name}
        type="date"
        onChange={this.onStringChange}
        min={convertToInputFormat(min)}
        max={convertToInputFormat(max)}
      />
    );
  }

  render() {
    return this.props.hasMouse
      ? <DatePickerCustom {...this.props} {...this.state} onDateChange={this.onDateChange} />
      : this.nativeView();
  }
}

export default withAdaptivity(DatePicker, {
  hasMouse: true,
});
