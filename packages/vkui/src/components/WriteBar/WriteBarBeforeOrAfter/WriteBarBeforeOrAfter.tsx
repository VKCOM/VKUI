'use client';

import { classNames } from '@vkontakte/vkjs';
import { Flex, type FlexProps } from '../../../components/Flex/Flex';
import { usePlatform } from '../../../hooks/usePlatform';
import styles from './WriteBarBeforeOrAfter.module.css';

type WriteBarBeforeOrAfterProps = FlexProps;

export const WriteBarBeforeOrAfter = ({ className, ...restProps }: WriteBarBeforeOrAfterProps) => {
  const platform = usePlatform();

  return (
    <Flex
      align="end"
      className={classNames(styles.host, platform === 'ios' && styles.ios, className)}
      {...restProps}
    />
  );
};
