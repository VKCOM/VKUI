import { classNames } from '@vkontakte/vkjs';
import { TypographyProps } from '@vkontakte/vkui';
import { Typography } from '@vkontakte/vkui/dist/components/Typography/Typography';
import styles from './DisplayTitle.module.css';

const stylesLevel = {
  '1': styles.level1,
  '2': styles.level2,
  '3': styles.level3,
  '4': styles.level4,
};

export interface DisplayTitleProps extends TypographyProps {
  level?: '1' | '2' | '3' | '4';
}

/**
 * FIXME(VKUI): import from vkui
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
