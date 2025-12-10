/* eslint-disable jsdoc/require-jsdoc */

import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import styles from './ModalOutlet.module.css';

export interface ModalOutletProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'hidden' | 'aria-hidden'> {
  disableModalOverlay?: boolean;
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
  disableModalOverlay,
  ...restProps
}: ModalOutletProps) => {
  return (
    <div
      ref={getRootRef}
      className={classNames(
        className,
        styles.host,
        isDesktop && styles.hostDesktop,
        disableModalOverlay && styles.disableModalOverlay,
      )}
      hidden={hidden}
      aria-hidden={hidden}
      {...restProps}
    >
      {children}
    </div>
  );
};
