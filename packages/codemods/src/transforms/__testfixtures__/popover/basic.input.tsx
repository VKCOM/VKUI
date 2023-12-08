import { unstable_Popover as Popover } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Popover action="click">content</Popover>

      <Popover offsetDistance={0}>content</Popover>

      <Popover offsetSkidding={0}>content</Popover>

      <Popover forcePortal>content</Popover>

      <Popover portalRoot={document.getElementById('root')}>content</Popover>

      <Popover forcePortal portalRoot={document.getElementById('root')}>content</Popover>

      <Popover shownDelay={5} hideDelay={10}>content</Popover>

      <Popover shownDelay={5}>content</Popover>

      <Popover hideDelay={5}>content</Popover>
    </React.Fragment>
  );
};
