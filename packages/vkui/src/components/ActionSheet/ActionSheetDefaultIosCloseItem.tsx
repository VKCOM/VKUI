import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ActionSheetItem, type ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import styles from './ActionSheetDefaultIosCloseItem.module.css';

export const ActionSheetDefaultIosCloseItem = ({
  children = 'Отмена',
  className,
  ...restProps
}: ActionSheetItemProps): React.ReactNode => {
  return (
    <ActionSheetItem
      className={classNames(styles.host, className)}
      data-action-sheet-cancel-item
      {...restProps}
    >
      {children}
    </ActionSheetItem>
  );
};
