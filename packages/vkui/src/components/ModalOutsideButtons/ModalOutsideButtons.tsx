import { classNames } from '@vkontakte/vkjs';
import { Flex, type FlexProps } from '../Flex/Flex';
import styles from './ModalOutsideButtons.module.css';

/**
 * @private
 */
export const ModalOutsideButtons = ({ className, children, ...restProps }: FlexProps) => {
  return (
    <Flex direction="column" className={classNames(styles.host, className)} {...restProps}>
      {children}
    </Flex>
  );
};
