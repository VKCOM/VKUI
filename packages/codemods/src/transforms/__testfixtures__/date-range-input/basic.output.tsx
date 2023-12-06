import { DateRangeInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <DateRangeInput
        value={value}
        prevMonthLabel="prevMonthLabel"
        nextMonthLabel="nextMonthLabel"
        changeDayLabel="changeDayLabel"
        changeMonthLabel="changeMonthLabel"
        changeYearLabel="changeYearLabel"
        changeStartDayLabel="changeStartDayLabel"
        changeStartMonthLabel="changeStartMonthLabel"
        changeStartYearLabel="changeStartYearLabel"
        changeEndDayLabel="changeEndDayLabel"
        changeEndMonthLabel="changeEndMonthLabel"
        changeEndYearLabel="changeEndYearLabel"
        clearFieldLabel="clearFieldLabel"
        showCalendarLabel="showCalendarLabel"
      />
    </React.Fragment>
  );
};
