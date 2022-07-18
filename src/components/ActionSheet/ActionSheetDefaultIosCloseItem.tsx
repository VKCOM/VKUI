import {
  ActionSheetItem,
  ActionSheetItemProps,
} from "../ActionSheetItem/ActionSheetItem";

export const ActionSheetDefaultIosCloseItem = (props: ActionSheetItemProps) => {
  return (
    <ActionSheetItem autoclose mode="cancel" {...props}>
      Отменить
    </ActionSheetItem>
  );
};
