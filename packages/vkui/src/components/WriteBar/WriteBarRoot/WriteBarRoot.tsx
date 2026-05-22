'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { Flex, type FlexProps } from '../../Flex/Flex';
import styles from './WriteBarRoot.module.css';

type WriteBarRootProps = FlexProps & {
  /**
   * Добавляет тень вокруг поля ввода.
   */
  shadow?: boolean;
};

export const WriteBarRoot = ({ shadow, className, ...restProps }: WriteBarRootProps) => {
  const platform = usePlatform();

  return (
    <Flex
      align="end"
      minBlockSize={52}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        shadow && styles.shadow,
        className,
      )}
      {...restProps}
    />
  );
};
