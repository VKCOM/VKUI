import { Spinner } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Spinner size="large" />
      <Spinner size="medium" />
      <Spinner size="regular" />
      <Spinner size="small">Кастомный текст вместо "Загружается...", который озвучит скринридер</Spinner>
    </React.Fragment>
  );
};
