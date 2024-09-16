import { Slider, RangeSlider as VKUIRangeSlider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const props = { id: 'RangeSlider' };
  return (
    <React.Fragment>
      <VKUIRangeSlider {...props} boolValue />
      <Slider test="123" />
    </React.Fragment>
  );
};
