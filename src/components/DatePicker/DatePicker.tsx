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
}

type GetOptions = () => CustomSelectOptionInterface[];

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

  // Переводим state к формату гг-мм-дд
  private convertToInputFormat(date: DatePickerState) {
    const { day, month, year } = date;

    return `${year}-${leadingZero(month)}-${leadingZero(day)}`;
  };

  // Переводим дату формата гг-мм-дд к объекту
  parseInputDate = (date: string) => {
    const splited = date.split('-');

    return {
      day: Number(splited[2]),
      month: Number(splited[1]),
      year: Number(splited[0]),
    };
  };

  getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  getMonthMaxDay = () => {
    const { month, year } = this.state;

    if (!month) {
      return 31;
    }

    if (!year) {
      return this.getDaysInMonth(2016, month);
    }

    return this.getDaysInMonth(year, month);
  };

  getDayOptions: GetOptions = () => {
    const maxMonthDay = this.getMonthMaxDay();
    const array: CustomSelectOptionInterface[] = new Array(maxMonthDay);

    for (let i = 0; i < maxMonthDay; i++) {
      const value = i + 1;

      array[i] = {
        label: String(value),
        value: value,
      };
    }

    return array;
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
    const yearOptions: CustomSelectOptionInterface[] = [];
    const maxYear = max.year;
    const minYear = min.year;

    for (let value = maxYear; value >= minYear; value--) {
      yearOptions.push({
        label: String(value),
        value: value,
      });
    }

    return yearOptions;
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
    const date = this.parseInputDate(e.currentTarget.value);

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
            />
          </div>
        </div>
        <input type="hidden" name={name} value={this.convertToInputFormat(this.state as DatePickerState)} />
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
          defaultValue={this.convertToInputFormat(this.state as DatePickerState)}
          onChange={this.onStringChange}
          min={this.convertToInputFormat(min)}
          max={this.convertToInputFormat(max)}
        />
      );
    }

    return (
      <Input
        {...restProps}
        name={name}
        type="date"
        onChange={this.onStringChange}
        min={this.convertToInputFormat(min)}
        max={this.convertToInputFormat(max)}
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
