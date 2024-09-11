import { ModalCard, ModalCardBase } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ModalCard header={header}></ModalCard>
      <ModalCard subheader={subheader}></ModalCard>
      <ModalCardBase header={header} subheader={subheader}></ModalCardBase>
    </React.Fragment>
  );
};
