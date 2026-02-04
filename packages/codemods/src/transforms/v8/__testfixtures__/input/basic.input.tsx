import { Input } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Input
        value="value"
        aria-label="input"
        data-testid="input"
        getRef={inputRef}
        name="input"
        minLength={0}
        maxLength={0}
        placeholder="value"
        onChange={() => {}}
        onFocus={() => {}}
        onInput={() => {}}
        onInputCapture={() => {}}
        onClick={() => {}}
        onClickCapture={() => {}}
        onPaste={() => {}}
        onPasteCapture={() => {}}
        onKeyDown={() => {}}
        onKeyDownCapture={() => {}}
        onKeyUp={() => {}}
        onKeyUpCapture={() => {}}
      />
    </React.Fragment>
  );
};
