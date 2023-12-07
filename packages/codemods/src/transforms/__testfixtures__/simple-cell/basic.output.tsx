import { SimpleCell } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <SimpleCell expandable="auto">...</SimpleCell>
      <SimpleCell expandable="auto">...</SimpleCell>
      <SimpleCell>...</SimpleCell>
      <SimpleCell expandable="auto">...</SimpleCell>
      <SimpleCell expandable={expandable}>...</SimpleCell>
    </React.Fragment>
  );
};
