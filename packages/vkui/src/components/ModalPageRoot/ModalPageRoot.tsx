import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import styles from './ModalPageRoot.module.css';

export interface ModalPageRootProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'hidden' | 'aria-hidden'> {
  hidden?: boolean;
}

/**
 * @private
 */
export const ModalPageRoot = ({
  className,
  hidden,
  children,
  getRootRef,
  ...restProps
}: ModalPageRootProps) => {
  return (
    <div
      ref={getRootRef}
      className={classNames(className, styles.host)}
      hidden={hidden}
      aria-hidden={hidden}
      {...restProps}
    >
      {children}
    </div>
  );
};
