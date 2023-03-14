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
  Component = 'button',
  ...restProps
}: CellButtonProps) => {
  return (
    <SimpleCell
      stopPropagation={true}
      {...restProps}
      Component={Component}
      className={classNames(
        styles['CellButton'],
        'vkuiInternalCellButton',
        mode === 'danger' &&
          classNames(styles['CellButton--mode-danger'], 'vkuiInternalCellButton--mode-danger'),
        centered && styles['CellButton--centered'],
        className,
      )}
    />
  );
};
