import { HorizontalScroll } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <HorizontalScroll inline>
        <div />
        <div />
        <div />
      </HorizontalScroll>
      <HorizontalScroll arrowSize="m" inline={true}>
        <div />
        <div />
        <div />
      </HorizontalScroll>
    </React.Fragment>
  );
};
