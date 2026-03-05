'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../../hooks/usePlatform';
import { RootComponent, type RootComponentProps } from '../../../RootComponent/RootComponent';
import styles from './WriteBarRootBeforeOrAfter.module.css';

type WriteBarRootBeforeProps = RootComponentProps<HTMLDivElement>;

export const WriteBarRootBeforeOrAfter = (restProps: WriteBarRootBeforeProps) => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(styles.host, platform === 'ios' && styles.ios)}
      {...restProps}
    />
  );
};
