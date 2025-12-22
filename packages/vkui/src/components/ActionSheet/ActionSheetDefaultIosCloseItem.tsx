import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ActionSheetItem, type ActionSheetItemProps } from '../ActionSheetItem/ActionSheetItem';
import { ActionSheetItemContext } from '../ActionSheetItem/context';
import styles from './ActionSheetDefaultIosCloseItem.module.css';

const CANCEL_ITEM_CONTEXT_VALUE = {
  isCancelItem: true,
};

export const ActionSheetDefaultIosCloseItem = ({
  children = 'Отмена',
  className,
  ...restProps
}: ActionSheetItemProps): React.ReactNode => {
  return (
    <ActionSheetItemContext.Provider value={CANCEL_ITEM_CONTEXT_VALUE}>
      <ActionSheetItem className={classNames(styles.host, className)} {...restProps}>
        {children}
      </ActionSheetItem>
    </ActionSheetItemContext.Provider>
  );
};
