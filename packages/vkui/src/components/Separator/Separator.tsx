import { classNames } from '@vkontakte/vkjs';
import { type AdaptiveProp, type LayoutProps, resolveLayoutProps } from '../../lib/layouts';
import { type SpacingSizeProp } from '../../lib/spacings/sizes';
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
  size?: AdaptiveProp<SpacingSizeProp>;
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
  ...restProps
}: SeparatorProps): React.ReactNode => {
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={classNames(
        padding && styles.padded,
        appearanceClassNames[appearance],
        directionClassNames[direction],
        restProps.size !== undefined && styles.sized,
        align !== 'center' && alignClassNames[align],
      )}
    >
      <hr className={styles.in} />
    </RootComponent>
  );
};
