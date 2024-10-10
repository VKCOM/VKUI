import { classNames } from '@vkontakte/vkjs';
import { spacingSizeClassNames, type SpacingSizeProp } from '../../lib/spacings/sizes';
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
  direction?: 'inline' | 'block';
  /**
   * Размер контейнера, в который вложен разделитель
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
  block: styles.directionBlock,
  inline: styles.directionInline,
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
  direction = 'inline',
  align = 'center',
  style,
  size,
  ...restProps
}: SeparatorProps): React.ReactNode => (
  <RootComponent
    {...restProps}
    baseClassName={classNames(
      padding && styles.padded,
      appearanceClassNames[appearance],
      typeof size === 'string' && spacingSizeClassNames[size],
      directionClassNames[direction],
      size !== undefined && styles.sized,
      align !== 'center' && alignClassNames[align],
    )}
    style={{
      ...(typeof size === 'number' && { [CUSTOM_CSS_TOKEN_FOR_USER_SIZE]: `${size}px` }),
      ...style,
    }}
  >
    <hr className={styles.in} />
  </RootComponent>
);
