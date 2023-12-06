import { DateRangeInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <DateRangeInput
        value={value}
        prevMonthAriaLabel="prevMonthLabel"
        nextMonthAriaLabel="nextMonthLabel"
        changeDayAriaLabel="changeDayLabel"
        changeMonthAriaLabel="changeMonthLabel"
        changeYearAriaLabel="changeYearLabel"
        changeStartDayAriaLabel="changeStartDayLabel"
        changeStartMonthAriaLabel="changeStartMonthLabel"
        changeStartYearAriaLabel="changeStartYearLabel"
        changeEndDayAriaLabel="changeEndDayLabel"
        changeEndMonthAriaLabel="changeEndMonthLabel"
        changeEndYearAriaLabel="changeEndYearLabel"
        clearFieldAriaLabel="clearFieldLabel"
        showCalendarAriaLabel="showCalendarLabel"
      />
    </React.Fragment>
  );
};
