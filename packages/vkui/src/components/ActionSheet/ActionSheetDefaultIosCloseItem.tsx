import * as React from 'react';
import { ActionSheetItem, ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';

export const ActionSheetDefaultIosCloseItem = (props: ActionSheetItemProps) => {
  return (
    <ActionSheetItem mode="cancel" isCancelItem {...props}>
      Отмена
    </ActionSheetItem>
  );
};
