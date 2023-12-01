import { FixedLayout } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <FixedLayout getRootRef={ref2}>...</FixedLayout>
      <FixedLayout getRootRef={ref1} boolValue>...</FixedLayout>
    </React.Fragment>
  );
};
