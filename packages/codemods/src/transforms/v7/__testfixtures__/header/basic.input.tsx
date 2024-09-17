import { Header } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Header mode="primary" multiline size="large">
        Кто может писать мне личные сообщения
      </Header>
      <Header mode="secondary" multiline size="regular">
        Кто может писать мне личные сообщения
      </Header>
    </React.Fragment>
  );
};
