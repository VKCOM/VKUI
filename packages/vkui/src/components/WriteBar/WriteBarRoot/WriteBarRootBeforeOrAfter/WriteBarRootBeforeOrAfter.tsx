'use client';

import { classNames } from '@vkontakte/vkjs';
import { Flex, type FlexProps } from '../../../../components/Flex/Flex';
import { usePlatform } from '../../../../hooks/usePlatform';
import styles from './WriteBarRootBeforeOrAfter.module.css';

type WriteBarRootBeforeProps = FlexProps;

export const WriteBarRootBeforeOrAfter = ({ className, ...restProps }: WriteBarRootBeforeProps) => {
  const platform = usePlatform();

  return (
    <Flex
      align="end"
      className={classNames(styles.host, platform === 'ios' && styles.ios, className)}
      {...restProps}
    />
  );
};
