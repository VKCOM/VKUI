import { ScreenSpinner } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* Проверяем удаление size */}
      <ScreenSpinner
        state="loading"
        size="regular"
      />
      <ScreenSpinner.Container>
        <ScreenSpinner.Loader size="small" />
        <ScreenSpinner.SwapIcon />
      </ScreenSpinner.Container>

      {/* Проверяем переименование caption на label */}
      <ScreenSpinner
        state="loading"
        caption="Caption"
      />
      <ScreenSpinner.Container caption="Caption">
        <ScreenSpinner.Loader />
        <ScreenSpinner.SwapIcon />
      </ScreenSpinner.Container>
    </React.Fragment>
  );
};
