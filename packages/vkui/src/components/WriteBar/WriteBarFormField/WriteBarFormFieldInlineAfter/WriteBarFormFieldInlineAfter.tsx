'use client';

import { classNames } from '@vkontakte/vkjs';
import { Flex, type FlexProps } from '../../../../components/Flex/Flex';
import { usePlatform } from '../../../../hooks/usePlatform';
import styles from './WriteBarFormFieldInlineAfter.module.css';

type WriteBarFormFieldInlineAfterProps = FlexProps;

export const WriteBarFormFieldInlineAfter = ({
  className,
  ...restProps
}: WriteBarFormFieldInlineAfterProps) => {
  const platform = usePlatform();

  return (
    <Flex
      align="end"
      className={classNames(platform === 'ios' && styles.ios, className)}
      {...restProps}
    />
  );
};
