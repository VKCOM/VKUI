import { Tooltip as TextTooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <TextTooltip offsetByCrossAxis={0} offsetByMainAxis={0} usePortal={someHTMLElement}>
        123
      </TextTooltip>
    </React.Fragment>
  );
};
