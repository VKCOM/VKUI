import React, {
  Component,
  ChangeEvent,
  ChangeEventHandler,
  HTMLAttributes,
} from 'react';
import CustomSelect, { SelectChangeResult } from '../CustomSelect/CustomSelect';
import Input from '../Input/Input';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';
import { hasMouse } from '../../helpers/inputUtils';
import { HasFormLabels, HasPlatform } from '../../types';
import { leadingZero } from '../../lib/utils';

const DefaultMonths: string[] = [
  'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
];

export interface SelectOption {
  value: number;
  label: string;
}

interface DateFormat {
  day: number;
  month: number;
  year: number;
}

type State = DateFormat;
type Attrs = Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'min' | 'max'>;

interface Props extends Attrs, HasPlatform, HasFormLabels, AdaptivityProps {
  min: State;
  max: State;
  name?: string;
  defaultValue?: State;
  monthNames?: string[];
  dayPlaceholder?: string;
  monthPlaceholder?: string;
  yearPlaceholder?: string;
  onDateChange?: (value: State) => void;
}

type GetOptions = () => SelectOption[];
type SelectChangeHandler = (result: SelectChangeResult) => void;

class DatePicker extends Component<Props, Partial<State>> {
  constructor(props: Props) {
    super(props);

    this.state = props.defaultValue ? props.defaultValue : {
      day: 0,
      month: 0,
      year: 0,
    };
  }

  // Переводим state к формату гг-мм-дд
  private convertToInputFormat(date: State) {
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
    const array: SelectOption[] = new Array(maxMonthDay);

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
    const yearOptions: SelectOption[] = [];
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

  onSelectChange: SelectChangeHandler = ({ value, name }) => {
    const { onDateChange } = this.props;

    this.setState(() => ({
      [name]: value,
    }), () => {
      onDateChange && onDateChange(this.state as State);
    });
  };

  onStringChange: ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { onDateChange } = this.props;
    const { value } = e.currentTarget;
    const date = this.parseInputDate(value);

    this.setState(() => ({
      ...date,
    }));

    onDateChange && onDateChange(date);
  };

  get desktopView() {
    const { name, dayPlaceholder, monthPlaceholder, yearPlaceholder, tabIndex } = this.props;
    const { day, month, year } = this.state;

    return (
      <div className="DatePicker">
        <div className="DatePicker__container">
          <div className="DatePicker__day">
            <CustomSelect
              tabIndex={tabIndex}
              name="day"
              value={day}
              options={this.getDayOptions()}
              placeholder={dayPlaceholder}
              onChange={this.onSelectChange}
            />
          </div>
          <div className="DatePicker__month">
            <CustomSelect
              tabIndex={tabIndex}
              name="month"
              value={month}
              options={this.getMonthOptions()}
              placeholder={monthPlaceholder}
              onChange={this.onSelectChange}
            />
          </div>
          <div className="DatePicker__year">
            <CustomSelect
              tabIndex={tabIndex}
              name="year"
              value={year}
              options={this.getYearOptions()}
              placeholder={yearPlaceholder}
              onChange={this.onSelectChange}
            />
          </div>
        </div>
        <input type="hidden" name={name} value={this.convertToInputFormat(this.state as State)} />
      </div>
    );
  }

  get mobileView() {
    const { top, name, min, max, tabIndex } = this.props;
    const { day, month, year } = this.state;

    if (day && month && year) {
      return (
        <Input
          tabIndex={tabIndex}
          top={top}
          name={name}
          type="date"
          defaultValue={this.convertToInputFormat(this.state as State)}
          onChange={this.onStringChange}
          min={this.convertToInputFormat(min)}
          max={this.convertToInputFormat(max)}
        />
      );
    }

    return (
      <Input
        tabIndex={tabIndex}
        top={top}
        name={name}
        type="date"
        onChange={this.onStringChange}
        min={this.convertToInputFormat(min)}
        max={this.convertToInputFormat(max)}
      />
    );
  }

  render() {
    return hasMouse ? this.desktopView : this.mobileView;
  }
}

export default withAdaptivity(DatePicker, {
  viewMode: true,
});
