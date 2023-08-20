import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../../types';
import { Text } from '../../Typography/Text/Text';
import { usePaginationPageClassNames } from './usePaginationPageClasses';
import styles from './PaginationPage.module.css';

export interface PaginationPageEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HasRootRef<HTMLSpanElement> {
  disabled?: boolean;
}

export const PaginationPageEllipsis = ({
  className,
  disabled,
  ...restProps
}: PaginationPageEllipsisProps) => {
  const paginationClassNames = usePaginationPageClassNames({ isCurrent: false, disabled });

  return (
    <Text
      className={classNames(
        paginationClassNames,
        styles['PaginationPage--type-ellipsis'],
        className,
      )}
      {...restProps}
    >
      &#8230;
    </Text>
  );
};
