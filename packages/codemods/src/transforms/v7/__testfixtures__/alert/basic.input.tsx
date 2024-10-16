import { Alert } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Alert
        actions={[
          {
            title: 'Лишить права',
            mode: 'destructive',
          },
          {
            title: 'Отмена',
            mode: 'cancel',
          },
        ]}
        header="Подтвердите действие"
        text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
        actionsAlign="left"
        actionsLayout="horizontal"
      />
    </React.Fragment>
  );
};
