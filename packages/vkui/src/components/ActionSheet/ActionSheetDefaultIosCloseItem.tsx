import { ActionSheetItem, type ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';

export const ActionSheetDefaultIosCloseItem = ({
  children = 'Отмена',
  ...restProps
}: ActionSheetItemProps): React.ReactNode => {
  return (
    <ActionSheetItem mode="cancel" isCancelItem {...restProps}>
      {children}
    </ActionSheetItem>
  );
};
