import { classNames } from '@vkontakte/vkjs';
import { SimpleCell, type SimpleCellProps } from '../SimpleCell/SimpleCell';
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
}: CellButtonProps): React.ReactNode => {
  return (
    <SimpleCell
      {...restProps}
      className={classNames(
        styles.host,
        mode === 'danger' && styles.modeDanger,
        centered && styles.centered,
        className,
      )}
    />
  );
};
