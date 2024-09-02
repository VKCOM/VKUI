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
  'primary': styles['Separator--mode-primary'],
  'secondary': styles['Separator--mode-secondary'],
  'primary-alpha': styles['Separator--mode-primaryAlpha'],
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
    baseClassName={classNames(!wide && styles['Separator--padded'], modeClassNames[mode])}
  >
    <hr className={styles['Separator__in']} />
  </RootComponent>
);
