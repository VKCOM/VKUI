import { SplitCol } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <SplitCol autoSpaced>...</SplitCol>
      <SplitCol>...</SplitCol>
      <SplitCol autoSpaced>...</SplitCol>
    </React.Fragment>
  );
};
