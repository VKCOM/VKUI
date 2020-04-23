import React, {
  Component,
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
} from 'react';
import CustomSelect from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import withAdaptivity, { AdaptivityProps, ViewMode } from '../../hoc/withAdaptivity';
import { HasFormLabels, HasPlatform } from '../../types';

const DefaultMonths: string[] = [
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

interface Props extends HTMLAttributes<HTMLDivElement>, HasPlatform, HasFormLabels, AdaptivityProps {
  min: string; // 1901-01-01
  max: string; // 2006-01-01
  name?: string;
  defaultValue?: string;
  optionsHeightMax?: number;
  monthNames?: string[];
  onDateChange?: (value: string) => void;
}

type GetOptions = () => SelectOption[];
type GetDaysInMonth = (year: string | number, month: string) => number;
type GetMonthMaxDay = () => number;
type SelectChangeHandler = (value: string, name: string) => void;

class DatePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = props.defaultValue ?
      this.parseInputDate(props.defaultValue) : this.parseInputDate(props.max);
  }

  // Переводим state к формату гг-мм-дд
  private convertToInputFormat(date: State) {
    const { day, month, year } = date;

    return `${year}-${month}-${day}`;
  };

  // Переводим дату формата гг-мм-дд к объекту
  parseInputDate = (date: string) => {
    const splited = date.split('-');

    return {
      day: splited[2],
      month: splited[1],
      year: splited[0],
    };
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
    const { monthNames } = this.props;

    return (monthNames || DefaultMonths).map((name, index) => {
      const value = String(index + 1);

      return {
        label: name,
        value: value.length === 1 ? '0' + value : value,
      };
    });
  };

  getYearOptions: GetOptions = () => {
    const { max, min } = this.props;
    const yearOptions: SelectOption[] = [];
    const maxYear = +this.parseInputDate(max).year;
    const minYear = +this.parseInputDate(min).year;

    for (let value = maxYear; value >= minYear; value--) {
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
    }), () => {
      onDateChange && onDateChange(this.convertToInputFormat(this.state));
    });
  };

  onStringChange: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { onDateChange } = this.props;
    const { value } = e.currentTarget;
    const date = this.parseInputDate(value);

    this.setState(() => ({
      ...date,
    }));

    onDateChange && onDateChange(value);
  };

  get desktopView() {
    const { name, optionsHeightMax } = this.props;
    const { day, month, year } = this.state;

    return (
      <fieldset name={name || null} className="DatePicker">
        <div className="DatePicker__container">
          <div className="DatePicker__day">
            <CustomSelect
              name="day"
              value={day}
              options={this.getDayOptions()}
              optionsHeightMax={optionsHeightMax}
              onSelectChange={this.onSelectChange}
            />
          </div>
          <div className="DatePicker__month">
            <CustomSelect
              name="month"
              value={month}
              options={this.getMonthOptions()}
              optionsHeightMax={optionsHeightMax}
              onSelectChange={this.onSelectChange}
            />
          </div>
          <div className="DatePicker__year">
            <CustomSelect
              name="year"
              value={year}
              options={this.getYearOptions()}
              optionsHeightMax={optionsHeightMax}
              onSelectChange={this.onSelectChange}
            />
          </div>
        </div>
      </fieldset>
    );
  }

  get mobileView() {
    const { top, name, min, max } = this.props;

    return (
      <Input
        top={top}
        name={name}
        type="date"
        defaultValue={this.convertToInputFormat(this.state)}
        onChange={this.onStringChange}
        min={min}
        max={max}
      />
    );
  }

  render() {
    const isDesktop = this.props.viewMode >= ViewMode.DESKTOP;
    return isDesktop ? this.desktopView : this.mobileView;
  }
}

export default withAdaptivity(DatePicker, {
  viewMode: true,
});
