import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Typography, type TypographyProps } from '../Typography';
import styles from './DisplayTitle.module.css';

const stylesLevel = {
  '1': styles['DisplayTitle--level-1'],
  '2': styles['DisplayTitle--level-2'],
  '3': styles['DisplayTitle--level-3'],
  '4': styles['DisplayTitle--level-4'],
};

const sizeYClassNames = {
  none: styles['DisplayTitle--sizeY-none'],
  compact: styles['DisplayTitle--sizeY-compact'],
};

export interface DisplayTitleProps extends TypographyProps {
  level?: '1' | '2' | '3' | '4';
}

/**
 * Используется для крупных заголовков.
 *
 * @see https://vkcom.github.io/VKUI/#/DisplayTitle
 */
export const DisplayTitle = ({
  className,
  level = '1',
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: DisplayTitleProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(
        className,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        stylesLevel[level],
      )}
      {...restProps}
    />
  );
};
