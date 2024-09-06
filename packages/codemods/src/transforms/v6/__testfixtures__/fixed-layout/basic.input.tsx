import { FixedLayout } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <FixedLayout getRef={ref2}>...</FixedLayout>
      <FixedLayout getRef={ref1} getRootRef={ref1} boolValue>...</FixedLayout>
    </React.Fragment>
  );
};
