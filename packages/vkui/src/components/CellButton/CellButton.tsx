import { classNames } from '@vkontakte/vkjs';
import { SimpleCell, type SimpleCellProps } from '../SimpleCell/SimpleCell';
import styles from './CellButton.module.css';

export const appearanceClassNames = {
  'accent': styles.appearanceAccent,
  'neutral': styles.appearanceNeutral,
  'negative': styles.appearanceNegative,
  'accent-invariable': styles.appearanceAccentInvariable,
};

export interface CellButtonProps extends SimpleCellProps {
  /**
   * > При использование `centered` значение по умолчанию будет `"accent"`.
   *
   * @default neutral
   */
  appearance?: 'neutral' | 'negative' | 'accent' | 'accent-invariable';
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CellButton
 */
export const CellButton = ({
  centered = false,
  appearance: appearanceProp,
  className,
  ...restProps
}: CellButtonProps): React.ReactNode => {
  const isCenteredPreset = appearanceProp === undefined && centered;
  const appearance = isCenteredPreset ? 'accent' : appearanceProp || 'neutral';
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
