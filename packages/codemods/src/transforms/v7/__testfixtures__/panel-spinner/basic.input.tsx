import { PanelSpinner } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelSpinner size="large" />
      <PanelSpinner size="medium" />
      <PanelSpinner size="regular" />
      <PanelSpinner size={"small"} />
    </React.Fragment>
  );
};
