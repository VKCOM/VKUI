import { SplitCol } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <SplitCol spaced>...</SplitCol>
      <SplitCol spaced={false}>...</SplitCol>
      <SplitCol spaced={true}>...</SplitCol>
    </React.Fragment>
  );
};
