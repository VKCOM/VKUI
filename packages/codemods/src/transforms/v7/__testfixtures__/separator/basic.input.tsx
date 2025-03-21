import { Separator } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Separator mode="primary" />
      <Separator mode="primary-alpha" wide />
      <Separator mode={"secondary"} />
      <Separator wide={false} />
      <Separator wide={true} />
    </React.Fragment>
  );
};
