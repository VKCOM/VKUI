import { Radio } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Radio
        id="radio"
        name="radio"
        checked
        onClick={() => {}}
        onChange={() => {}}
        description="description"
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
        id="radio"
        name="radio"
        onClick={() => {}}
        onChange={() => {}}
        aria-label="radio"
        data-testid="radio"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
