import { File } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <File
        id="file"
        name="file"
        tabIndex={-1}
        autoFocus
        placeholder="file"
        size="m"
        align="center"
        mode="secondary"
        stretched
        accept=".txt"
        multiple
        onClick={() => {}}
        onChange={() => {}}
        aria-label="input"
        data-testid="input"
        getRef={inputRef}
      />
    </React.Fragment>
  );
};
