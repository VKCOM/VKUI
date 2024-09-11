import { RangeSlider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const props = { id: 'RangeSlider' };
  return (
    <React.Fragment>
      <RangeSlider />
      <RangeSlider {...props} boolValue />
      <RangeSlider test="123" />
      <RangeSlider test="123">inner</RangeSlider>
    </React.Fragment>
  );
};
