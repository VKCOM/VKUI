import { Switch } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Switch
        id="switch"
        name="switch"
        checked
        onChange={() => {}}
        onClick={() => {}}
        aria-label="switch"
        aria-checked="checked"
        data-testid="switch"
        data-value="true"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
