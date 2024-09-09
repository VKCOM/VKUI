import { ScreenSpinner } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ScreenSpinner
        state="loading"
        size="regular"
      />
      <ScreenSpinner.Container>
        <ScreenSpinner.Loader size="small" />
        <ScreenSpinner.SwapIcon />
      </ScreenSpinner.Container>
    </React.Fragment>
  );
};
