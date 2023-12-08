import { Calendar } from '@vkontakte/vkui';
import React from 'react';

const App = ({ value, setValue, ...rest }) => {
  return (
    <React.Fragment>
      <Calendar
        value={value}
        onChange={setValue}
        {...rest}
        prevMonthLabel="prevMonthLabel"
        nextMonthLabel="nextMonthLabel"
        changeDayLabel="changeDayLabel"
        changeMonthLabel="changeMonthLabel"
        changeYearLabel="changeYearLabel"
        changeMinutesLabel="changeMinutesLabel"
        changeHoursLabel="changeHoursLabel"
      />
    </React.Fragment>
  );
};
