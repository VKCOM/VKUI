'use client';

import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { WriteBarRootBeforeOrAfter } from './WriteBarRootBeforeOrAfter/WriteBarRootBeforeOrAfter';
import styles from './WriteBarRoot.module.css';

type WriteBarRootProps = RootComponentProps<HTMLDivElement> & {
  /**
   * Добавляет тень вокруг поля ввода.
   */
  shadow?: boolean;
};

export const WriteBarRoot = ({ shadow, ...restProps }: WriteBarRootProps) => {
  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        shadow && styles.shadow,
      )}
      {...restProps}
    />
  );
};

WriteBarRoot.Before = WriteBarRootBeforeOrAfter;
WriteBarRoot.After = WriteBarRootBeforeOrAfter;
