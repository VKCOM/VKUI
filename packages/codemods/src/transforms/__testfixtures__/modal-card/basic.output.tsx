import { ModalCard, ModalCardBase } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ModalCard header={header} headerComponent="h2"></ModalCard>
      <ModalCard subheader={subheader} subheaderComponent="h5"></ModalCard>
      <ModalCardBase
        header={header}
        subheader={subheader}
        subheaderComponent="h5"
        headerComponent="h2"></ModalCardBase>
    </React.Fragment>
  );
};
