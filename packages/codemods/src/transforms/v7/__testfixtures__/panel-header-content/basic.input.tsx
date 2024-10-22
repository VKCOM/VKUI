import { Avatar, PanelHeader, PanelHeaderBack, PanelHeaderButton, PanelHeaderContent } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeader
        before={<PanelHeaderBack label="Назад" onClick={() => {}} />}
        after={
          <PanelHeaderButton onClick={() => {}}/>
        }
      >
        <PanelHeaderContent
          status="был в сети сегодня, в 18:46"
          before={<Avatar size={36} src={'user_va'} />}
        >
          Влад Анесов
        </PanelHeaderContent>
      </PanelHeader>
    </React.Fragment>
  );
};
