import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import styles from './ModalPageBackdrop.module.css';

export interface ModalPageBackdropProps extends HasRootRef<HTMLDivElement> {
  visible: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * @private
 */
export const ModalPageBackdrop = ({ visible, getRootRef, onClick }: ModalPageBackdropProps) => {
  return (
    <div
      ref={getRootRef}
      aria-hidden="true"
      className={classNames(
        styles.host,
        visible ? styles.hostStateVisible : styles.hostStateInvisible,
      )}
      onClick={onClick}
    />
  );
};
