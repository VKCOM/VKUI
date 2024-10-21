import { Avatar, Banner } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Banner
        before={<Avatar size={48} src={'user_lihachyov'} />}
        header="Сегодня день рождения Михаила Лихачёва"
        subheader="Подарите подарок"
        text="Дополнительный текст"
        asideMode="dismiss"
      />
      <Banner
        before={<Avatar size={48} src={'user_lihachyov'} />}
        header="Сегодня день рождения Михаила Лихачёва"
        subheader={"Подарите подарок"}
        text={"Дополнительный текст"}
        asideMode="dismiss"
      />
    </React.Fragment>
  );
};
