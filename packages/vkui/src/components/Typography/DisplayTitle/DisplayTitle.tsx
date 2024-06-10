import { classNames } from '@vkontakte/vkjs';
import { Typography, TypographyProps } from '../Typography';
import styles from './DisplayTitle.module.css';

const stylesLevel = {
  '1': styles['DisplayTitle--level-1'],
  '2': styles['DisplayTitle--level-2'],
  '3': styles['DisplayTitle--level-3'],
  '4': styles['DisplayTitle--level-4'],
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
  ...restProps
}: DisplayTitleProps) => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      className={classNames(className, stylesLevel[level])}
      {...restProps}
    />
  );
};
