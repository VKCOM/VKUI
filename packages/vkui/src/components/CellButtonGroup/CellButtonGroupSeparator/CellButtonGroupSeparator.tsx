import { classNames } from '@vkontakte/vkjs';
import { Separator, type SeparatorProps } from '../../Separator/Separator';
import styles from './CellButtonGroupSeparator.module.css';

type CellButtonGroupSeparatorProps = Omit<SeparatorProps, 'direction' | 'padding'>;

export const CellButtonGroupSeparator: React.FC<CellButtonGroupSeparatorProps> = ({
  className,
  ...restProps
}) => {
  return (
    <Separator
      className={classNames(styles.root, className)}
      {...restProps}
      direction="vertical"
      padding
    />
  );
};
