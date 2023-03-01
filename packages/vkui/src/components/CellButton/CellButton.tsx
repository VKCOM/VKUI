import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { SimpleCell, SimpleCellProps } from '../SimpleCell/SimpleCell';
import styles from './CellButton.module.css';

export interface CellButtonProps extends SimpleCellProps {
  mode?: 'primary' | 'danger';
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CellButton
 */
export const CellButton = ({
  centered = false,
  mode = 'primary',
  className,
  ...restProps
}: CellButtonProps) => {
  return (
    <SimpleCell
      stopPropagation={true}
      {...restProps}
      className={classNames(
        styles['CellButton'],
        {
          primary: styles['CellButton--mode-primary'],
          danger: styles['CellButton--mode-danger'],
        }[mode],
        centered && styles['CellButton--centered'],
        className,
      )}
    />
  );
};
