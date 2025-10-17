import { Select } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const selectRef = React.createRef<HTMLSelectElement>();

  const onInputChange = () => {};

  return (
    <React.Fragment>
      <Select
        value={"value"}
        options={[]}
        onChange={() => {}}
        aria-label="input"
        data-testid="input"
        getRef={selectRef}
        getSelectInputRef={inputRef}
        nativeSelectTestId="select"
        onInputChange={() => {}}
      />
    </React.Fragment>
  );
};
