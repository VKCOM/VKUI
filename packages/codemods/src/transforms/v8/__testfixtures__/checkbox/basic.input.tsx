import { Checkbox } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Checkbox
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        getRef={inputRef}
      />
      <Checkbox
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        getRef={inputRef}
      >
        Checkbox
      </Checkbox>
      <Checkbox.Input
        checked
        aria-label="checkbox"
        data-testid="checkbox"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
