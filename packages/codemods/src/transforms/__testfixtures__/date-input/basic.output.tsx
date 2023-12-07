import { DateInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <DateInput
        value={value}
        prevMonthLabel="prevMonthLabel"
        nextMonthLabel="nextMonthLabel"
        changeMinutesLabel="changeMinutesLabel"
        changeHoursLabel="changeHoursLabel"
        changeDayLabel="changeDayLabel"
        changeMonthLabel="changeMonthLabel"
        changeYearLabel="changeYearLabel"
        clearFieldLabel="clearFieldLabel"
        showCalendarLabel="showCalendarLabel"
      />
    </React.Fragment>
  );
};
