import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения компонента
   */
  mode?: 'primary' | 'secondary' | 'primary-alpha';
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

const modeClassNames = {
  'primary': styles.modePrimary,
  'secondary': styles.modeSecondary,
  'primary-alpha': styles.modePrimaryAlpha,
};

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({
  wide,
  mode = 'primary',
  ...restProps
}: SeparatorProps): React.ReactNode => (
  <RootComponent
    {...restProps}
    baseClassName={classNames(!wide && styles.padded, modeClassNames[mode])}
  >
    <hr className={styles.in} />
  </RootComponent>
);
