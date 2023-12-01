import { AppearanceProvider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <AppearanceProvider appearance={appearance}>...</AppearanceProvider>
      <AppearanceProvider appearance={() => getSome()}>...</AppearanceProvider>
    </React.Fragment>
  );
};
