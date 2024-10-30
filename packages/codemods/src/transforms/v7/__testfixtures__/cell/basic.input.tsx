import { Cell } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Cell
        onClick={() => {}}
        expandable="auto"
        indicator="При использовании"
      >
        Геолокация
      </Cell>

      <Cell
        onClick={() => {}}
        expandable="always"
        indicator="При использовании"
      >
        Геолокация
      </Cell>

      {/* rename subhead -> overtitle */}
      <Cell
        subhead={"Subhead"}
        onClick={() => {}}
        indicator="При использовании"
      >
        Геолокация
      </Cell>
    </React.Fragment>
  );
};
