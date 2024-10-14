import { classNames } from '@vkontakte/vkjs';
import { SimpleCell, type SimpleCellProps } from '../SimpleCell/SimpleCell';
import '../SimpleCell/SimpleCell.module.css';
import styles from './CellButton.module.css';

export const appearanceClassNames = {
  accent: styles.appearanceAccent,
  neutral: styles.appearanceNeutral,
  negative: styles.appearanceNegative,
};

export interface CellButtonProps extends SimpleCellProps {
  /**
   * > Режим `centered` переопределяет токен для темы `"accent"`.
   */
  appearance?: 'accent' | 'neutral' | 'negative';
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CellButton
 */
export const CellButton = ({
  centered = false,
  appearance = 'accent',
  className,
  ...restProps
}: CellButtonProps): React.ReactNode => {
  return (
    <SimpleCell
      {...restProps}
      className={classNames(
        styles.host,
        appearanceClassNames[appearance],
        centered && styles.centered,
        className,
      )}
    />
  );
};
