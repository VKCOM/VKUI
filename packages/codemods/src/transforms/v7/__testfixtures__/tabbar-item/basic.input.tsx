import { Icon28NewsfeedOutline, Tabbar, TabbarItem } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Tabbar style={{ position: 'static', margin: '10px 0' }}>
        <TabbarItem selected={true} onClick={() => {}} text="Новости">
          <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem selected={false} onClick={() => {}} text={"Новости"}>
          <Icon28NewsfeedOutline />
        </TabbarItem>
      </Tabbar>
    </React.Fragment>
  );
};
