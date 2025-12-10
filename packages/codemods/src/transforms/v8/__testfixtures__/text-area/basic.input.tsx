import { Textarea } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <React.Fragment>
      <Textarea
        id="textArea"
        value="value"
        aria-label="text-area"
        data-testid="text-area"
        getRef={textAreaRef}
        placeholder="Музыка, спорт"
        onChange={() => {}}
        onResize={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        onClick={() => {}}
        rows={4}
        cols={10}
        maxLength={100}
        minLength={100}
        disabled={false}
        readOnly
      />
    </React.Fragment>
  );
};
