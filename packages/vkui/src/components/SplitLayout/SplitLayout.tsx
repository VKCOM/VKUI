'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './SplitLayout.module.css';

const warn = warnOnce('SplitLayout');

export interface SplitLayoutProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Будет удалeно в **VKUI v9**.
   * Вместо этого используйте `slotProps={ content: { getRootRef: ... } }`.
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
   * @deprecated Since 7.0.0. Будет удалeно в **VKUI v9**.
   * Начиная с **VKUI v7** компоненты можно располагать в любом
   * месте приложения в пределах `AppRoot`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   *
   * @deprecated Since 7.0.0. Будет удалeно в **VKUI v9**.
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

  return (
    <RootComponent baseClassName={styles.host} {...rootRest}>
      {header}
      <RootComponent
        baseClassName={classNames(
          styles.inner,
          hasReactNode(header) && styles.interruptFakeHeader,
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
