import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageFooter.module.css';

export interface ModalPageFooterProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  noSeparator?: boolean;
}

export const ModalPageFooter = ({
  noSeparator = false,
  children,
  ...restProps
}: ModalPageFooterProps) => {
  return (
    <RootComponent baseClassName={styles.ModalPageFooter} {...restProps}>
      {!noSeparator && <Separator wide />}
      <div className={styles.ModalPageFooter__inner}>{children}</div>
    </RootComponent>
  );
};
