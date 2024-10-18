import { Button, Tooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Tooltip placement="right" header="Header" text="Привет">
        <Button style={{ margin: 20 }}>Наведи</Button>
      </Tooltip>
    </React.Fragment>
  );
};
