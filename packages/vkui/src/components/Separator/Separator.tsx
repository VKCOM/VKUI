import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Стиль отображения компонента
   */
  appearance?: 'primary' | 'secondary' | 'primary-alpha';
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

const appearanceClassNames = {
  'primary': styles.appearancePrimary,
  'secondary': styles.appearanceSecondary,
  'primary-alpha': styles.appearancePrimaryAlpha,
};

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({
  wide,
  appearance = 'primary',
  ...restProps
}: SeparatorProps): React.ReactNode => (
  <RootComponent
    {...restProps}
    baseClassName={classNames(!wide && styles.padded, appearanceClassNames[appearance])}
  >
    <hr className={styles.in} />
  </RootComponent>
);
