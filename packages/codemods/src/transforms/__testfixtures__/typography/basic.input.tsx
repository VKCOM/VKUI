import { Headline, Subhead, Title as VKUITitle } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <VKUITitle Component="span">6456</VKUITitle>
      <Headline Component="span" />
      <Subhead Component="span" boolValue />
    </React.Fragment>
  );
};
