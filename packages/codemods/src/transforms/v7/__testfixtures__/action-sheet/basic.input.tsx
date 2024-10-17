import { ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ActionSheet
        onClose={() => {}}
        header="Вы действительно хотите удалить это видео из Ваших видео?"
        text="Данное действие реально удалит видео, подумайте!"
      >
        <ActionSheetItem mode="destructive">Удалить видео</ActionSheetItem>
      </ActionSheet>
    </React.Fragment>
  );
};
