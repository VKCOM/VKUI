import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../../types';
import { Tappable } from '../../Tappable/Tappable';
import { Text } from '../../Typography/Text/Text';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { PaginationProps } from '../Pagination';
import { getPageLabelDefault } from '../utils';
import { usePaginationPageClassNames } from './usePaginationPageClasses';
import styles from './PaginationPage.module.css';

export interface PaginationPageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HasRootRef<HTMLButtonElement>,
    Pick<PaginationProps, 'getPageLabel'> {
  isCurrent?: boolean;
  children: number;
}

export const PaginationPageButton = ({
  isCurrent = false,
  getPageLabel = getPageLabelDefault,
  children,
  className,
  disabled,
  ...restProps
}: PaginationPageButtonProps) => {
  const paginationClassNames = usePaginationPageClassNames({ isCurrent, disabled });

  return (
    <Tappable
      className={classNames(paginationClassNames, className)}
      activeMode={styles['PaginationPage--state-active']}
      hoverMode={styles['PaginationPage--state-hover']}
      focusVisibleMode="outside"
      data-page={children}
      aria-current={isCurrent ? true : undefined}
      disabled={disabled}
      {...restProps}
    >
      <Text normalize={false}>
        <VisuallyHidden>{getPageLabel(isCurrent)} </VisuallyHidden>
        {children}
      </Text>
    </Tappable>
  );
};
