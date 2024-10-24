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
        shownDelay={5}
        hideDelay={10}
      >
        123
      </TextTooltip>

      <TextTooltip shownDelay={5}>123</TextTooltip>

      <TextTooltip hideDelay={5}>123</TextTooltip>
    </React.Fragment>
  );
};
