import { PopoutWrapper } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PopoutWrapper hasMask />
      <PopoutWrapper hasMask={false} />
    </React.Fragment>
  );
};
