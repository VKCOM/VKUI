import { noop, PanelHeaderSubmit } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeaderSubmit onClick={noop}>
        Закрыть
      </PanelHeaderSubmit>

      <PanelHeaderSubmit onClick={noop}>
        <span>Закрыть</span>
      </PanelHeaderSubmit>

      <PanelHeaderSubmit onClick={noop} label="Другой label">
        Закрыть
      </PanelHeaderSubmit>

      <PanelHeaderSubmit onClick={noop} children="Закрыть" />
    </React.Fragment>
  );
};
