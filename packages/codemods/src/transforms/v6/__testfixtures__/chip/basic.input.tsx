import { Chip } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <Chip value="Чип" removable={true} removeAriaLabel="Удалить">
        Чип
      </Chip>
    </React.Fragment>
  );
};
