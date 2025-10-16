import { WriteBar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <React.Fragment>
      <WriteBar
        value="value"
        onChange={() => {}}
        aria-label="text-area"
        data-testid="text-area"
        getRef={textAreaRef}
      />
    </React.Fragment>
  );
};
