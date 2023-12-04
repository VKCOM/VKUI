import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ActionSheet toggleRef={ref} placement="top">
        <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
      </ActionSheet>
    </React.Fragment>
  );
};
