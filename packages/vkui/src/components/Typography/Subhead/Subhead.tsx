import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles['Subhead--sizeY-none'],
  compact: styles['Subhead--sizeY-compact'],
};

export type SubheadProps = TypographyProps;

/**
 * Используется для подзаголовков 2 уровня.
 *
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export const Subhead = ({
  className,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: SubheadProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        styles['Subhead'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    />
  );
};
