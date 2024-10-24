import { Gallery, HorizontalScroll, ScrollArrow } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ScrollArrow direction='down' size='m' />
      <ScrollArrow direction='left' size='l' />
      <HorizontalScroll arrowSize='m'  />
      <HorizontalScroll arrowSize='l'  />
      <Gallery arrowSize='m' />
      <Gallery arrowSize='l' />
    </React.Fragment>
  );
};
