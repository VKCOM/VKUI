import { Tabbar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Tabbar shadow />
      <Tabbar shadow={false} />
    </React.Fragment>
  );
};
