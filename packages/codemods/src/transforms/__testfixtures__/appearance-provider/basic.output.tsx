import { AppearanceProvider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <AppearanceProvider value={appearance}>...</AppearanceProvider>
      <AppearanceProvider value={() => getSome()}>...</AppearanceProvider>
    </React.Fragment>
  );
};
