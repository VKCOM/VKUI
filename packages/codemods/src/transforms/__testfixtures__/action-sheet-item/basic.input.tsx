import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <ActionSheet>
        <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
        <ActionSheetItem autoClose={false}>Закрепить запись</ActionSheetItem>
        <ActionSheetItem autoClose={true}>Закрепить запись</ActionSheetItem>
      </ActionSheet>
    </React.Fragment>
  );
};
