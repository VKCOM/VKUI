import { CalendarRange } from '@vkontakte/vkui';
import React from 'react';

const App = ({ value, setValue, ...rest }) => {
  return (
    <React.Fragment>
      <CalendarRange
        value={value}
        onChange={setValue}
        {...rest}
        prevMonthAriaLabel="prevMonthLabel"
        nextMonthAriaLabel="nextMonthLabel"
        changeDayAriaLabel="changeDayLabel"
        changeMonthAriaLabel="changeMonthLabel"
        changeYearAriaLabel="changeYearLabel"
      />
    </React.Fragment>
  );
};
