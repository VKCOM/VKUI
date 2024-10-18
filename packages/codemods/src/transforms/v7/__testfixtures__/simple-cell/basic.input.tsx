import { SimpleCell } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <SimpleCell
        onClick={() => {}}
        expandable="auto"
        indicator="При использовании"
      >
        Геолокация
      </SimpleCell>

      <SimpleCell
        onClick={() => {}}
        expandable="always"
        indicator="При использовании"
      >
        Геолокация
      </SimpleCell>
    </React.Fragment>
  );
};
