import { unstable_Popper as Popper } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Popper offsetDistance={0}>content</Popper>
      <Popper offsetSkidding={0}>content</Popper>
      <Popper arrowClassName="arrow">content</Popper>
      <Popper forcePortal>content</Popper>
      <Popper portalRoot={document.getElementById('root')}>content</Popper>
      <Popper forcePortal portalRoot={document.getElementById('root')}>content</Popper>
      <Popper renderContent={() => <div>content</div>} />
    </React.Fragment>
  );
};
