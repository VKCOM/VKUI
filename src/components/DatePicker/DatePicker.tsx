import {
  Component,
  ChangeEventHandler,
  HTMLAttributes,
} from 'react';
import Input from '../Input/Input';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { HasPlatform } from '../../types';
import { leadingZero } from '../../lib/utils';
import CustomSelect, { CustomSelectOptionInterface } from '../CustomSelect/CustomSelect';

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

type GetOptions = () => CustomSelectOptionInterface[];

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

function getMonthMaxDay({ month, year }: Partial<DatePickerDateFormat>) {
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

  getDayOptions: GetOptions = () => {
    return range(1, getMonthMaxDay(this.state)).map((value) => ({
      label: String(value),
      value,
    }));
  };

  getMonthOptions: GetOptions = () => {
    const { monthNames } = this.props;

    return (monthNames || DefaultMonths).map((name, index) => {
      const value = index + 1;

      return {
        label: name,
        value: value,
      };
    });
  };

  getYearOptions: GetOptions = () => {
    const { max, min } = this.props;
    return range(max.year, min.year).map((value) => ({
      label: String(value),
      value: value,
    }));
  };

  onSelectChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { onDateChange } = this.props;

    this.setState({
      [e.target.name]: Number(e.target.value),
    }, () => {
      onDateChange && onDateChange(this.state as DatePickerDateFormat);
    });
  };

  onStringChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { onDateChange } = this.props;
    const date = parseInputDate(e.currentTarget.value);

    this.setState(() => ({
      ...date,
    }));

    onDateChange && onDateChange(date);
  };

  customView() {
    const {
      name, min, max,
      dayPlaceholder, monthPlaceholder, yearPlaceholder,
      popupDirection,
      defaultValue,
      hasMouse,
      monthNames,
      disabled,
      ...restProps
    } = this.props;
    const { day, month, year } = this.state;

    return (
      <div vkuiClass="DatePicker" {...restProps}>
        <div vkuiClass="DatePicker__container">
          <div vkuiClass="DatePicker__day">
            <CustomSelect
              name="day"
              value={day}
              options={this.getDayOptions()}
              placeholder={dayPlaceholder}
              popupDirection={popupDirection}
              onChange={this.onSelectChange}
              disabled={disabled}
            />
          </div>
          <div vkuiClass="DatePicker__month">
            <CustomSelect
              name="month"
              value={month}
              options={this.getMonthOptions()}
              placeholder={monthPlaceholder}
              popupDirection={popupDirection}
              onChange={this.onSelectChange}
              disabled={disabled}
            />
          </div>
          <div vkuiClass="DatePicker__year">
            <CustomSelect
              name="year"
              value={year}
              options={this.getYearOptions()}
              placeholder={yearPlaceholder}
              popupDirection={popupDirection}
              onChange={this.onSelectChange}
              disabled={disabled}
            />
          </div>
        </div>
        <input type="hidden" name={name} value={convertToInputFormat(this.state)} />
      </div>
    );
  }

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
    return this.props.hasMouse ? this.customView() : this.nativeView();
  }
}

export default withAdaptivity(DatePicker, {
  hasMouse: true,
});
