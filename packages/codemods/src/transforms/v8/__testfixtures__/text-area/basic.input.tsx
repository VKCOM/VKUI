import { Textarea } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <React.Fragment>
      <Textarea
        value="value"
        aria-label="text-area"
        data-testid="text-area"
        getRef={textAreaRef}
        placeholder="Музыка, спорт"
      />
    </React.Fragment>
  );
};
