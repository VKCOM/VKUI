import { Button, ModalCard, ModalCardBase } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ModalCardBase
        dismissButtonMode="inside"
        dismissLabel="Закрыть"
        header="Десктопная и планшетная версии с крестиком внутри"
        headerComponent="h1"
        subheader="Сверху будет безопасный отступ до иконки"
        subheaderComponent="span"
        actions={
          <React.Fragment>
            <Button size="l" mode="primary" stretched>
              Некая кнопка
            </Button>
          </React.Fragment>
        }
      />

      <ModalCard
        dismissButtonMode="inside"
        dismissLabel="Закрыть"
        header="Десктопная и планшетная версии с крестиком внутри"
        headerComponent="h1"
        subheader="Сверху будет безопасный отступ до иконки"
        subheaderComponent="span"
        actions={
          <React.Fragment>
            <Button size="l" mode="primary" stretched>
              Некая кнопка
            </Button>
          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};
