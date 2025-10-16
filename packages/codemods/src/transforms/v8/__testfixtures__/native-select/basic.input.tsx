import { NativeSelect } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const selectRef = React.createRef<HTMLSelectElement>();

  const onInputChange = () => {};

  return (
    <React.Fragment>
      <NativeSelect
        value="value"
        onChange={() => {}}
        aria-label="select"
        data-testid="select"
        getRef={selectRef}
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </NativeSelect>
    </React.Fragment>
  );
};
