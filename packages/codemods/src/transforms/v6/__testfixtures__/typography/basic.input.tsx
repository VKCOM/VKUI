import { Headline, Subhead, Title as VKUITitle } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <VKUITitle Component="span">6456</VKUITitle>
      <VKUITitle>6456</VKUITitle>
      <VKUITitle level="1">6456</VKUITitle>
	    <VKUITitle level="2">6456</VKUITitle>
   	  <VKUITitle level="3">6456</VKUITitle>
      <VKUITitle Component="h4">6456</VKUITitle>
      <Headline Component="span" />
      <Headline Component="h3" />
      <Headline />
      <Subhead Component="span" boolValue />
	    <Subhead boolValue />
    </React.Fragment>
  );
};
