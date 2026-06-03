import { RangeSlider as VKUIRangeSlider } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

export const App = () => {
  const props = { id: 'RangeSlider' };
  return (
    <React.Fragment>
      <VKUIRangeSlider {...props} boolValue />
    </React.Fragment>
  );
};
