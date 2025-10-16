import { Input } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Input
        value="value"
        aria-label="input"
        data-testid="input"
        getRef={inputRef}

      />
    </React.Fragment>
  );
};
