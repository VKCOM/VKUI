import { Chip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Chip value="Чип" removable={true} removeLabel="Удалить">
        Чип
      </Chip>
    </React.Fragment>
  );
};
