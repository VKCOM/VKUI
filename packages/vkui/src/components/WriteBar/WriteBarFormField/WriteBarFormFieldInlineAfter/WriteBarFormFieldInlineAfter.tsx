'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../../hooks/usePlatform';
import { RootComponent, type RootComponentProps } from '../../../RootComponent/RootComponent';
import styles from './WriteBarFormFieldInlineAfter.module.css';

type WriteBarFormFieldInlineAfterProps = RootComponentProps<HTMLDivElement>;

export const WriteBarFormFieldInlineAfter = (restProps: WriteBarFormFieldInlineAfterProps) => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(styles.host, platform === 'ios' && styles.ios)}
      {...restProps}
    />
  );
};
