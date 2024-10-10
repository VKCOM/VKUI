import { AppearanceProvider, type AppearanceProviderProps, Snackbar } from '@vkontakte/vkui';
import React from 'react';

type Props = AppearanceProviderProps & {
  additionalProp: string,
}

const App = () => {
  const props: AppearanceProviderProps = {
    value: 'dark',
    children: (<Snackbar action="Поделиться">Поделиться</Snackbar>)
  };

  const getAdditionalProvider = () => (
    <AppearanceProvider value={"light"}>
      <Snackbar action="Поделиться">Поделиться</Snackbar>
    </AppearanceProvider>
  )

  return (
    <React.Fragment>
      <AppearanceProvider {...props} />
      {getAdditionalProvider()}
    </React.Fragment>
  );
};
