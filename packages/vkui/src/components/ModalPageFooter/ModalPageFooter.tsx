'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import {
  isSizeXCompactFallback,
  useAdaptivityWithJSMediaQueries,
} from '../../hooks/useAdaptivityWithJSMediaQueries';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageFooter.module.css';

export interface ModalPageFooterProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Отключение отображения разделителя.
   */
  noSeparator?: boolean;
  /**
   * Отключение отступов сверху и снизу.
   */
  noPadding?: boolean;
}

export const ModalPageFooter = ({
  noSeparator = false,
  noPadding = false,
  children,
  ...restProps
}: ModalPageFooterProps) => {
  const { sizeX: legacySizeXContext } = useAdaptivity();
  const { isDesktop, sizeX: legacySizeX, viewWidth } = useAdaptivityWithJSMediaQueries();
  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        !noPadding && styles.padded,
        isDesktop ? styles.hostDesktop : styles.hostMobile,
      )}
      {...restProps}
    >
      {!noSeparator && (
        <Separator
          className={styles.Separator}
          padding={isSizeXCompactFallback(viewWidth, legacySizeX, legacySizeXContext)}
        />
      )}
      {children}
    </RootComponent>
  );
};
