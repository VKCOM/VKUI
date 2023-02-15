import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './RichCellIcon.module.css';

export const RichCellIcon = ({
  children,
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...restProps} className={classNames(styles['RichCellIcon'], className)}>
      {children}
    </div>
  );
};
