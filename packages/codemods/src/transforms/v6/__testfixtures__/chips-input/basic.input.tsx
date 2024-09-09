import { ChipsInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ChipsInput id="color" value={colors} inputAriaLabel="Введите название цвета">
        Чип
      </ChipsInput>
    </React.Fragment>
  );
};
