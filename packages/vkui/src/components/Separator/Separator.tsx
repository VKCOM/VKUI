import { classNames } from '@vkontakte/vkjs';
import { resolveSpacingSize, type SpacingSizeProp } from '../../lib/spacings/sizes';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_SIZE = '--vkui_internal--spacing_size';

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения разделителя
   */
  appearance?: 'primary' | 'secondary' | 'primary-alpha';
  /**
   * Добавляет стандартные отступы у разделителя
   */
  padding?: boolean;
  /**
   * Направление отображения разделителя
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Размер контейнера, в который вложен разделитель
   *
   * Принимает значения дизайн-системы, числовые значения и css-переменные
   */
  size?: SpacingSizeProp;
  /**
   * Выравнивание разделителя в контейнере
   */
  align?: 'start' | 'center' | 'end';
}

const appearanceClassNames = {
  'primary': styles.appearancePrimary,
  'secondary': styles.appearanceSecondary,
  'primary-alpha': styles.appearancePrimaryAlpha,
};

const directionClassNames = {
  horizontal: styles.directionHorizontal,
  vertical: styles.directionVertical,
};

const alignClassNames = {
  start: styles.alignStart,
  end: styles.alignEnd,
};

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({
  padding = false,
  appearance = 'primary',
  direction = 'horizontal',
  align = 'center',
  style,
  size,
  ...restProps
}: SeparatorProps): React.ReactNode => {
  const [spacingSizeClassName, spacingSizeStyle] = resolveSpacingSize(
    CUSTOM_CSS_TOKEN_FOR_USER_SIZE,
    size,
  );
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        padding && styles.padded,
        appearanceClassNames[appearance],
        directionClassNames[direction],
        size !== undefined && styles.sized,
        align !== 'center' && alignClassNames[align],
        spacingSizeClassName,
      )}
      style={
        spacingSizeStyle
          ? {
              ...spacingSizeStyle,
              ...style,
            }
          : style
      }
    >
      <hr className={styles.in} />
    </RootComponent>
  );
};
