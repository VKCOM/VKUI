import { AppearanceProvider as AppearanceProviderAlias, type AppearanceProviderProps as AppearanceProviderPropsAlias, Snackbar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const props: AppearanceProviderPropsAlias = {
    value: 'dark',
    children: (<Snackbar action="Поделиться">Поделиться</Snackbar>)
  };

  return (
    <React.Fragment>
      <AppearanceProviderAlias {...props} />
    </React.Fragment>
  );
};
