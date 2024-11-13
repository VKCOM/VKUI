import { noop, PanelHeaderBack } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeaderBack onClick={noop}>
        Закрыть
      </PanelHeaderBack>

      <PanelHeaderBack onClick={noop}>
        <span>Закрыть</span>
      </PanelHeaderBack>

      <PanelHeaderBack onClick={noop} children="Закрыть" />
    </React.Fragment>
  );
};
