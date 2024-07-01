import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, TypographyProps } from '../Typography';
import styles from './Subhead.module.css';

const sizeYClassNames = {
  none: styles['Subhead--sizeY-none'],
  ['compact']: styles['Subhead--sizeY-compact'],
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
  colorType = 'initial',
  ...restProps
}: SubheadProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      colorType={colorType}
      className={classNames(
        className,
        styles['Subhead'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      {...restProps}
    />
  );
};
