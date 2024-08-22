import { ActionSheetItem, type ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';

export const ActionSheetDefaultIosCloseItem = (props: ActionSheetItemProps): React.ReactNode => {
  return (
    <ActionSheetItem mode="cancel" isCancelItem {...props}>
      Отмена
    </ActionSheetItem>
  );
};
