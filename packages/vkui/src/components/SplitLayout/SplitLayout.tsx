'use client';

import type * as React from 'react';
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
   * @deprecated Since 7.9.0. Будет удалено в **VKUI v9**.
   * Вместо этого используйте `slotProps={ content: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLDivElement> | undefined;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `content`: свойства для прокидывания в контент;.
   */
  slotProps?:
    | {
        root?:
          | (React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute)
          | undefined;
        content?:
          | (React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute)
          | undefined;
      }
    | undefined;
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   *
   * @deprecated Since 7.0.0. Будет удалено в **VKUI v9**.
   * Начиная с **VKUI v7** компоненты можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  popout?: React.ReactNode | undefined;
  /**
   * Свойство для отрисовки `ModalRoot`.
   *
   * @deprecated Since 7.0.0. Будет удалено в **VKUI v9**.
   * Начиная с **VKUI v7**  `ModalRoot` можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  modal?: React.ReactNode | undefined;
  /**
   * Компонент для отрисовки заголовка.
   */
  header?: React.ReactNode | undefined;
  /**
   * Центрирует контент.
   */
  center?: boolean | undefined;
}

/**
 * @see https://vkui.io/components/split-layout
 */
export const SplitLayout = ({
  popout,
  modal,
  header,
  center,
  getRef,
  children,

  slotProps,
  ...restProps
}: SplitLayoutProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development') {
    if (getRef) {
      warn(
        'Свойство `getRef` устаревшее, используйте `slotProps={ content: { getRootRef: ... } }`',
      );
    }
    if (popout) {
      warn(
        'Свойство `popout` устаревшее. Передаваемый элемент можно рендерить в любом месте приложения.',
      );
    }
    if (modal) {
      warn(
        'Свойство `modal` устаревшее. Передаваемый элемент можно рендерить в любом месте приложения.',
      );
    }
  }

  const rootRest = useMergeProps(restProps, slotProps?.root);
  const contentRest = useMergeProps({ getRootRef: getRef }, slotProps?.content);

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
