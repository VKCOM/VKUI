import { UsersStack } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <UsersStack direction="column">...</UsersStack>
      <UsersStack direction="row">...</UsersStack>
    </React.Fragment>
  );
};
