import { Gallery } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Gallery isDraggable>{slides}</Gallery>
      <Gallery isDraggable={false}>{slides}</Gallery>
    </React.Fragment>
  );
};
