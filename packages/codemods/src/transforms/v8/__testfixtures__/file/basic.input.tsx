import { File } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <File
        size="m"
        aria-label="input"
        data-testid="input"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
