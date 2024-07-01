import { classNames } from '@vkontakte/vkjs';
import { HasCaps, Typography, TypographyProps } from '../Typography';
import styles from './Caption.module.css';

const stylesLevel = {
  '1': styles['Caption--level-1'],
  '2': styles['Caption--level-2'],
  '3': styles['Caption--level-3'],
};

export interface CaptionProps extends TypographyProps, HasCaps {
  level?: '1' | '2' | '3';
}

/**
 * Используется для мелких подписей.
 *
 * @see https://vkcom.github.io/VKUI/#/Caption
 */
export const Caption = ({
  className,
  level = '1',
  caps,
  Component = 'span',
  normalize = true,
  inline = false,
  colorType = 'initial',
  ...restProps
}: CaptionProps): React.ReactNode => {
  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      colorType={colorType}
      className={classNames(className, caps && styles['Caption--caps'], stylesLevel[level])}
      {...restProps}
    />
  );
};
