import { VisuallyHiddenInput } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <VisuallyHiddenInput />
      <VisuallyHiddenInput {...props} keka />
      <VisuallyHiddenInput keka="123" />
      <VisuallyHiddenInput keka="123">534534</VisuallyHiddenInput>
    </React.Fragment>
  );
};
