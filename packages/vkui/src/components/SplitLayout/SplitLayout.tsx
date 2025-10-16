'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { usePlatform } from '../../hooks/usePlatform';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './SplitLayout.module.css';

const warn = warnOnce('SplitLayout');

export interface SplitLayoutProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ content: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLDivElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `content`: свойства для прокидывания в контент;.
   */
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
    content?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
  };
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   *
   * @deprecated Будет удалeно в **VKUI v8**.
   * Начиная с **VKUI v7** компоненты можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   *
   * @deprecated Будет удалeно в **VKUI v8**.
   * Начиная с **VKUI v7**  `ModalRoot` можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  modal?: React.ReactNode;
  /**
   * Компонент для отрисовки заголовка.
   */
  header?: React.ReactNode;
  /**
   * Центрирует контент.
   */
  center?: boolean;
}

/**
 * @see https://vkui.io/components/split-layout
 */
export const SplitLayout = ({
  header,
  children,
  getRootRef,
  getRef,
  className,
  center,
  modal,
  popout,

  slotProps,
  ...restProps
}: SplitLayoutProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ content: { getRootRef: ... } }`');
  }

  const rootRest = useMergeProps({ getRootRef }, slotProps?.root);
  const contentRest = useMergeProps(
    {
      getRootRef: getRef,
      className,
      ...restProps,
    },
    slotProps?.content,
  );

  const platform = usePlatform();

  return (
    <RootComponent
      baseClassName={classNames(styles.host, platform === 'ios' && styles.ios)}
      {...rootRest}
    >
      {header}
      <RootComponent
        baseClassName={classNames(
          styles.inner,
          !!header && styles.innerHeader,
          center && styles.innerCenter,
        )}
        {...contentRest}
      >
        {children}
        {modal}
        {popout}
      </RootComponent>
    </RootComponent>
  );
};
