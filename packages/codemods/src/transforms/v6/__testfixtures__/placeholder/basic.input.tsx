import { Placeholder } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Placeholder withPadding>Placeholder</Placeholder>
      <Placeholder withPadding={true}>Placeholder</Placeholder>
      <Placeholder withPadding={false}>Placeholder</Placeholder>
    </React.Fragment>
  );
};
