import { Separator, Spacing } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Spacing size="3xs">
        <Separator/>
      </Spacing>

      <Spacing size="3xs" />

      <Spacing size={"3xs"} />

      <Spacing size={8} />
    </React.Fragment>
  );
};
