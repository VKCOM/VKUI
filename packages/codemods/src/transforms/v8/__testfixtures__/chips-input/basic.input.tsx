import { ChipsInput } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  const onInputChange = () => {};

  return (
    <React.Fragment>
      <ChipsInput
        value="value"
        options={[]}
        id="favoriteGroups"
        data-testid="input"
        getRef={inputRef}
        inputValue="value"
        defaultInputValue="defaultValue"
        onInputChange={onInputChange}
      />
    </React.Fragment>
  );
};
