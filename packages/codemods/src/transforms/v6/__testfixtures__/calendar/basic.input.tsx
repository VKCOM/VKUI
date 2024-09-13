import { Calendar } from '@vkontakte/vkui';
import React from 'react';

const App = ({ value, setValue, ...rest }) => {
  return (
    <React.Fragment>
      <Calendar
        value={value}
        onChange={setValue}
        {...rest}
        prevMonthAriaLabel="prevMonthLabel"
        nextMonthAriaLabel="nextMonthLabel"
        changeDayAriaLabel="changeDayLabel"
        changeMonthAriaLabel="changeMonthLabel"
        changeYearAriaLabel="changeYearLabel"
        changeMinutesAriaLabel="changeMinutesLabel"
        changeHoursAriaLabel="changeHoursLabel"
      />
    </React.Fragment>
  );
};
