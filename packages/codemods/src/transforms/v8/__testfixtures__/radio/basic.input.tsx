import { Radio } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Radio
        checked
        aria-label="radio"
        data-testid="radio"
        labelProps={{
          'data-testid': 'radio-root',
          'aria-label': 'radio-root-label'
        }}
        getRef={inputRef}
      />
      <Radio.Input
        checked
        aria-label="radio"
        data-testid="radio"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
