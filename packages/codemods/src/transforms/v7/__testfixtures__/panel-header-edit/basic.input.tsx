import { noop, PanelHeaderEdit } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeaderEdit label="Label" onClick={noop}>
        Edit Label
      </PanelHeaderEdit>

      <PanelHeaderEdit label="Label" children={'Edit Label'} onClick={noop} />
    </React.Fragment>
  );
};
