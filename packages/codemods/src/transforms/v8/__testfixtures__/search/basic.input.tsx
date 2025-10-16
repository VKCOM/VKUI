import { Search } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Search
        value=""
        onChange={() => {}}
        after={null}
        aria-label="input"
        data-testid="input"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
