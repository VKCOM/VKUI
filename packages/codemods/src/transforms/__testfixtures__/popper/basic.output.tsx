import { Popper } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Popper offsetByMainAxis={0}>content</Popper>
      <Popper offsetByCrossAxis={0}>content</Popper>
      <Popper arrowProps={{
        iconClassName: "arrow"
      }}>content</Popper>
      <Popper usePortal>content</Popper>
      <Popper usePortal={document.getElementById('root')}>content</Popper>
      <Popper usePortal={document.getElementById('root')}>content</Popper>
      <Popper children={() => <div>content</div>} />
    </React.Fragment>
  );
};
