import * as React from 'react';
import { ActionSheetItem, ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';

export const ActionSheetDefaultIosCloseItem = (props: ActionSheetItemProps) => {
  return (
    <ActionSheetItem autoClose mode="cancel" {...props}>
      Отменить
    </ActionSheetItem>
  );
};
