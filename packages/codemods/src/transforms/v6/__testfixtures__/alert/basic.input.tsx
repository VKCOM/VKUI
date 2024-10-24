import { Alert } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const action = [
    {
      title: 'Лишить права',
      mode: 'destructive',
      autoClose: false
    },
    {
      title: 'Отмена',
      autoClose: true,
      mode: 'cancel'
    },
  ];

  return (
    <React.Fragment>
      <Alert
        actions={[
          {
            title: 'Лишить права',
            mode: 'destructive',
            autoClose: false
          },
          {
            title: 'Отмена',
            autoClose: true,
            mode: 'cancel'
          },
        ]}
        header="Подтвердите действие"
        text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
      />
      <Alert actions={action} />
    </React.Fragment>
  );
};
