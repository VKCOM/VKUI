import { classNames } from '@vkontakte/vkjs';
import type { AlignType, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './ButtonGroup.module.css';

const stylesMode = {
  vertical: styles.modeVertical,
  horizontal: styles.modeHorizontal,
};

const stylesGap = {
  space: styles.gapSpace,
  s: styles.gapS,
  m: styles.gapM,
};

const stylesAlign = {
  left: styles.alignLeft,
  center: styles.alignCenter,
  right: styles.alignRight,
};

export interface ButtonGroupProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
   */
  mode?: 'vertical' | 'horizontal';
  /**
   * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
   */
  gap?: 'none' | 'space' | 's' | 'm';
  /**
   * Растягивает компонент на всю ширину контейнера.
   *
   * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
   */
  stretched?: boolean;
  /**
   * Горизонтальное выравнивание элементов внутри группы.
   */
  align?: AlignType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export const ButtonGroup = ({
  mode = 'horizontal',
  gap = 'm',
  stretched = false,
  align = 'left' /* NOTE: Чтобы блоки по-умолчанию не растягивались на всю ширину контейнера */,
  ...restProps
}: ButtonGroupProps): React.ReactNode => {
  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        stylesMode[mode],
        gap !== 'none' && stylesGap[gap],
        stretched && styles.stretched,
        stylesAlign[align],
      )}
      role="group"
      {...restProps}
    />
  );
};

ButtonGroup.displayName = 'ButtonGroup';
