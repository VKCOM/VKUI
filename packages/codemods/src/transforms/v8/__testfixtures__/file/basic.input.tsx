import { File } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <File
        size="m"
        id="file"
        align="center"
        mode="secondary"
        stretched
        accept=".txt"
        onClick={() => {}}
        onChange={() => {}}
        aria-label="input"
        data-testid="input"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
