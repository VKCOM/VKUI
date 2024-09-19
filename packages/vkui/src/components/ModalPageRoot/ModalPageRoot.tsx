import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import styles from './ModalPageRoot.module.css';

export type ModalPageRootProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @private
 */
export const ModalPageRoot = ({
  className,
  hidden,
  children,
  ...restProps
}: ModalPageRootProps) => {
  return (
    <div
      className={classNames(className, styles.host)}
      hidden={hidden}
      aria-hidden={hidden}
      {...restProps}
    >
      {children}
    </div>
  );
};
