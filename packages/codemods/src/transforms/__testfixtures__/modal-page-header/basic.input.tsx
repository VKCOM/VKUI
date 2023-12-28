import { ModalPageHeader } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ModalPageHeader getRef={ref2}>...</ModalPageHeader>
      <ModalPageHeader getRef={ref1} getRootRef={ref1} boolValue>...</ModalPageHeader>
      <ModalPageHeader separator>...</ModalPageHeader>
      <ModalPageHeader separator={false}>...</ModalPageHeader>
    </React.Fragment>
  );
};
