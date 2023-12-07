import { unstable_TextTooltip as TextTooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <TextTooltip
        autoUpdateOnTargetResize
        offsetSkidding={0}
        offsetDistance={0}
        forcePortal
        portalRoot={someHTMLElement}
        getRef={getRef}
      >
        123
      </TextTooltip>
    </React.Fragment>
  );
};
