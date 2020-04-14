import React, {
  Component,
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
} from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import { HasPlatform } from '../../types';

const MonthNames: string[] = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
];

export interface SelectOption {
  value: string | number;
  label: string;
}

interface State {
  day?: string; // 01
  month?: string; // 01
  year?: string; // 2006
}

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform {
  defaultValue?: string;
  mobile?: boolean;
  onDateChange?: (value: string) => void;
}

type GetDaysInMonth = (year: string | number, month: string) => number;
type GetMonthMaxDay = () => number;
type GetOptions = () => SelectOption[];
type SelectChangeHandler = (value: string, name: string) => void;

class DatePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = !props.defaultValue ? this.minDate : this.parseStringDate(props.defaultValue);
  }

  get minDate() {
    return {
      day: String(this.getDayOptions()[0].value),
      month: String(this.getMonthOptions()[0].value),
      year: String(this.getYearOptions()[0].value),
    };
  };

  get maxDate() {
    const years = this.getYearOptions();
    const lastYear = years.length - 1;

    return {
      day: String(this.getDayOptions()[0].value),
      month: String(this.getMonthOptions()[0].value),
      year: String(years[lastYear].value),
    };
  }

  // Переводим дату формата 03.04.2020 к объекту
  parseStringDate = (date?: string) => {
    if (!date || date === '0.0.0') {
      return null;
    }

    const splited = date.split('.');

    return {
      day: splited[0],
      month: splited[1],
      year: splited[2],
    };
  };

  parseInputDate = (date: string) => {
    const splited = date.split('-');

    return {
      day: splited[2],
      month: splited[1],
      year: splited[0],
    };
  };

  // Переводим дату к формату для input type=date: 2006-01-17
  dateToInputFormat = ({ day, month, year }: State) => {
    return `${year}-${month}-${day}`;
  };

  // Переводим дату из input type=date: 2006-01-17 к 17.01.2006
  inputDateToString = (date: string): string => {
    const splited = date.split('-');
    return `${splited[2]}.${splited[1]}.${splited[0]}`;
  };

  // Переводим дату из state к type=date: 2006-01-17 к 17.01.2006
  stateToString = () => {
    const { day, month, year } = this.state;

    return `${day}.${month}.${year}`;
  };

  getDaysInMonth: GetDaysInMonth = (year: string | number, month: string) => {
    return new Date(Number(year), Number(month) + 1, 0).getDate();
  };

  getMonthMaxDay: GetMonthMaxDay = () => {
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
    const array: SelectOption[] = new Array(maxMonthDay);

    for (let i = 0; i < maxMonthDay; i++) {
      const value = String(i + 1);

      array[i] = {
        label: value,
        value: value.length === 1 ? '0' + value : value,
      };
    }

    return array;
  };

  getMonthOptions: GetOptions = () => {
    return MonthNames.map((name, index) => {
      const value = String(index + 1);

      return {
        label: String(name),
        value: value.length === 1 ? '0' + value : value,
      };
    });
  };

  getYearOptions: GetOptions = () => {
    const yearOptions: SelectOption[] = [];
    const maxYearAvailable = new Date().getFullYear() - 14;

    for (let value = maxYearAvailable; value >= 1901; value--) {
      yearOptions.push({
        label: String(value),
        value: String(value),
      });
    }

    return yearOptions;
  };

  onSelectChange: SelectChangeHandler = (value: string, name: string) => {
    const { onDateChange } = this.props;

    this.setState(() => ({
      [name]: value,
    }));

    onDateChange && onDateChange(this.stateToString());
  };

  onStringChange: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { onDateChange } = this.props;
    const { value } = e.currentTarget;
    const date = this.parseInputDate(value);

    this.setState(() => ({
      ...date,
    }));

    onDateChange && onDateChange(this.inputDateToString(e.target.value));
  };

  get desktopView() {
    const { day, month, year } = this.state;

    return (
      <div className="DatePicker__container">
        <div className="DatePicker__day">
          <CustomSelect
            name="day"
            value={day}
            options={this.getDayOptions()}
            onSelectChange={this.onSelectChange}
          />
        </div>
        <div className="DatePicker__month">
          <CustomSelect
            name="month"
            value={month}
            options={this.getMonthOptions()}
            onSelectChange={this.onSelectChange}
          />
        </div>
        <div className="DatePicker__year">
          <CustomSelect
            name="year"
            value={year}
            options={this.getYearOptions()}
            onSelectChange={this.onSelectChange}
          />
        </div>
      </div>
    );
  }

  get mobileView() {
    const { day, month, year } = this.state;
    const defaultValue = this.dateToInputFormat({ day, month, year });

    return (
      <Input
        top="Дата рождения"
        name="bdate"
        type="date"
        defaultValue={defaultValue}
        onChange={this.onStringChange}
        min={this.dateToInputFormat(this.minDate)}
        max={this.dateToInputFormat(this.maxDate)}
      />
    );
  }

  render() {
    const { mobile } = this.props;
    // mobile - временное решение, пока нет платформы web

    return mobile ? this.mobileView : this.desktopView;
  }
}

export default DatePicker;
