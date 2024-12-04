'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageFooter.module.css';

export interface ModalPageFooterProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  noSeparator?: boolean;
  noPadding?: boolean;
}

export const ModalPageFooter = ({
  noSeparator = false,
  noPadding = false,
  children,
  ...restProps
}: ModalPageFooterProps) => {
  const { sizeX } = useAdaptivityWithJSMediaQueries();
  return (
    <RootComponent
      baseClassName={classNames(styles.host, !noPadding && styles.padded)}
      {...restProps}
    >
      {!noSeparator && <Separator className={styles.Separator} padding={sizeX !== 'regular'} />}
      {children}
    </RootComponent>
  );
};
