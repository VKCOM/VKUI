import { noop, PanelHeaderClose } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeaderClose onClick={noop}>
        Закрыть
      </PanelHeaderClose>

      <PanelHeaderClose onClick={noop}>
        <span>Закрыть</span>
      </PanelHeaderClose>

      <PanelHeaderClose onClick={noop} children="Закрыть" />
    </React.Fragment>
  );
};
