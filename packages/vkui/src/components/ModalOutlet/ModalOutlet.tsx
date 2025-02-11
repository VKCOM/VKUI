import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import styles from './ModalOutlet.module.css';

export interface ModalOutletProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'hidden' | 'aria-hidden'> {
  hidden?: boolean;
  isDesktop?: boolean;
}

/**
 * @private
 */
export const ModalOutlet = ({
  className,
  hidden,
  isDesktop,
  children,
  getRootRef,
  ...restProps
}: ModalOutletProps) => {
  return (
    <div
      ref={getRootRef}
      className={classNames(className, styles.host, isDesktop && styles.hostDesktop)}
      hidden={hidden}
      aria-hidden={hidden}
      {...restProps}
    >
      {children}
    </div>
  );
};
