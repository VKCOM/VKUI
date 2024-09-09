import { PanelHeader } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <PanelHeader visor>PanelHeader</PanelHeader>
      <PanelHeader visor={false}>PanelHeader</PanelHeader>
      <PanelHeader separator>PanelHeader</PanelHeader>
      <PanelHeader separator={false}>PanelHeader</PanelHeader>
    </React.Fragment>
  );
};
