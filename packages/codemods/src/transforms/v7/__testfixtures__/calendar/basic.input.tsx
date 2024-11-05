import { Calendar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const callback = () => {}
  return (
    <React.Fragment>
      <Calendar
        onChange={() => {}}
        enableTime={true}
        disablePast={true}
        disableFuture={true}
        onClose={() => {}}
      />

      <Calendar
        onChange={() => {}}
        enableTime={true}
        disablePast={true}
        disableFuture={true}
        onClose={callback}
      />
    </React.Fragment>
  );
};
