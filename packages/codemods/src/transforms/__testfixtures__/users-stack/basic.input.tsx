import { UsersStack } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <UsersStack layout="vertical">...</UsersStack>
      <UsersStack layout="horizontal">...</UsersStack>
      <UsersStack layout={layout} gfdg>...</UsersStack>
    </React.Fragment>
  );
};
