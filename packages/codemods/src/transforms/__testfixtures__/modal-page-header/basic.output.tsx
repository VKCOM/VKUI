import { ModalPageHeader } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ModalPageHeader getRootRef={ref2}>...</ModalPageHeader>
      <ModalPageHeader getRootRef={ref1} boolValue>...</ModalPageHeader>
    </React.Fragment>
  );
};
