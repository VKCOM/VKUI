import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../../types';
import { Tappable } from '../../Tappable/Tappable';
import { Text } from '../../Typography/Text/Text';
import { getPageAriaLabelDefault } from '../utils';
import { usePaginationPageClassNames } from './usePaginationPageClasses';
import styles from './PaginationPage.module.css';

export interface PaginationPageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HasRootRef<HTMLButtonElement> {
  isCurrent?: boolean;
  /**
   * Функция для переопределения и/или локализации `aria-label` атрибута.
   * По умолчанию используется текст на "ru_RU".
   */
  getPageAriaLabel?(page: number, isCurrent: boolean): string;
  children: number;
}

export const PaginationPageButton = ({
  isCurrent = false,
  getPageAriaLabel = getPageAriaLabelDefault,
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
      hasActive={!isCurrent}
      hasHover={!isCurrent}
      focusVisibleMode="outside"
      data-page={children}
      aria-current={isCurrent ? true : undefined}
      aria-label={getPageAriaLabel(children, isCurrent)}
      disabled={disabled}
      {...restProps}
    >
      <Text normalize={false}>{children}</Text>
    </Tappable>
  );
};
