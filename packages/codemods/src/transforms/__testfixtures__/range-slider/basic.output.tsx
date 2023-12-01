import { Slider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const props = { id: 'RangeSlider' };
  return (
    <React.Fragment>
      <Slider multiple />
      <Slider multiple {...props} boolValue />
      <Slider multiple test="123" />
      <Slider multiple test="123">inner</Slider>
    </React.Fragment>
  );
};
