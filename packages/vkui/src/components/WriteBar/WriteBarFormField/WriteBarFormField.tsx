'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { Flex, type FlexProps } from '../../Flex/Flex';
import { WriteBarFormFieldInlineAfter } from './WriteBarFormFieldInlineAfter/WriteBarFormFieldInlineAfter';
import styles from './WriteBarFormField.module.css';

type WriteBarFormFieldProps = FlexProps;

export const WriteBarFormField = ({ className, ...restProps }: WriteBarFormFieldProps) => {
  const platform = usePlatform();

  return (
    <Flex
      className={classNames(styles.host, platform === 'ios' && styles.ios, className)}
      {...restProps}
    />
  );
};

WriteBarFormField.InlineAfter = WriteBarFormFieldInlineAfter;
