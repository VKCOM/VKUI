import { CardScroll } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <CardScroll withSpaces>{cards}</CardScroll>
      <CardScroll withSpaces={false}>{cards}</CardScroll>
      <CardScroll withSpaces={withSpaces}>{cards}</CardScroll>
    </React.Fragment>
  );
};
