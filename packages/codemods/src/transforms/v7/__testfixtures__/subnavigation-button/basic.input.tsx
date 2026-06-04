import { SubnavigationButton } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <SubnavigationButton expandable={true} selected={true} onClick={() => {}}>
        Button
      </SubnavigationButton>
    </React.Fragment>
  );
};
