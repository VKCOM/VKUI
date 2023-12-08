import { DateInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <DateInput
        value={value}
        prevMonthAriaLabel="prevMonthLabel"
        nextMonthAriaLabel="nextMonthLabel"
        changeMinutesAriaLabel="changeMinutesLabel"
        changeHoursAriaLabel="changeHoursLabel"
        changeDayAriaLabel="changeDayLabel"
        changeMonthAriaLabel="changeMonthLabel"
        changeYearAriaLabel="changeYearLabel"
        clearFieldAriaLabel="clearFieldLabel"
        showCalendarAriaLabel="showCalendarLabel"
      />
    </React.Fragment>
  );
};
