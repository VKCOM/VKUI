import { classNames } from '@vkontakte/vkjs';
import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import { resolveSpacingSize, type SpacingSizeProp } from '../../lib/spacings/sizes';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_SIZE = '--vkui_internal--spacing_size';

type PickAllFlexProps<T> = { [K in keyof T as K extends `flex${string}` ? K : never]: T[K] };

export interface SeparatorProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    PickAllFlexProps<LayoutProps> {
  /**
   * Стиль отображения разделителя.
   */
  appearance?: 'primary' | 'secondary' | 'primary-alpha';
  /**
   * Добавляет стандартные отступы у разделителя.
   */
  padding?: boolean;
  /**
   * Направление отображения разделителя.
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Размер контейнера, в который вложен разделитель.
   *
   * Принимает значения дизайн-системы, числовые значения и css-переменные.
   */
  size?: SpacingSizeProp;
  /**
   * Выравнивание разделителя в контейнере.
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
 * @see https://vkui.io/components/separator
 */
export const Separator = ({
  padding = false,
  appearance = 'primary',
  direction = 'horizontal',
  align = 'center',
  size,
  ...restProps
}: SeparatorProps): React.ReactNode => {
  const [spacingSizeClassName, spacingSizeStyle] = resolveSpacingSize(
    CUSTOM_CSS_TOKEN_FOR_USER_SIZE,
    size,
  );
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={classNames(
        padding && styles.padded,
        appearanceClassNames[appearance],
        directionClassNames[direction],
        size !== undefined && styles.sized,
        align !== 'center' && alignClassNames[align],
        spacingSizeClassName,
      )}
      baseStyle={spacingSizeStyle}
    >
      <hr className={styles.in} />
    </RootComponent>
  );
};
