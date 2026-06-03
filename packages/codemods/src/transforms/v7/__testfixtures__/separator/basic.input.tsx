import { Separator } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <Separator mode="primary" />
      <Separator mode="primary-alpha" wide />
      <Separator mode={'secondary'} />
      <Separator wide={false} />
      <Separator wide={true} />
    </React.Fragment>
  );
};
