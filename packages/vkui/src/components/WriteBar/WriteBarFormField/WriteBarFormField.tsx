'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { WriteBarFormFieldInlineAfter } from './WriteBarFormFieldInlineAfter/WriteBarFormFieldInlineAfter';
import styles from './WriteBarFormField.module.css';

type WriteBarFormFieldProps = RootComponentProps<HTMLDivElement>;

export const WriteBarFormField = (restProps: WriteBarFormFieldProps) => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(styles.host, platform === 'ios' && styles.ios)}
      {...restProps}
    />
  );
};

WriteBarFormField.InlineAfter = WriteBarFormFieldInlineAfter;
