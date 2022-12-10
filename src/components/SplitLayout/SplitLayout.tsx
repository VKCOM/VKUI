import * as React from 'react';
import { classNamesString } from '../../lib/classNames';
import { Platform } from '../../lib/platform';
import { HasRef, HasRootRef } from '../../types';
import { PopoutRoot } from '../PopoutRoot/PopoutRoot';
import { usePlatform } from '../../hooks/usePlatform';
import styles from './SplitLayout.module.css';

export interface SplitLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Свойство для отрисовки `Alert`, `ActionSheet` и `ScreenSpinner`.
   */
  popout?: React.ReactNode;
  /**
   * Свойство для отрисовки `ModalRoot`.
   */
  modal?: React.ReactNode;
  header?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SplitLayout
 */
export const SplitLayout = ({
  popout,
  modal,
  header,
  children,
  getRootRef,
  getRef,
  className,
  ...restProps
}: SplitLayoutProps) => {
  const platform = usePlatform();

  return (
    <PopoutRoot
      className={classNamesString(
        styles['SplitLayout'],
        platform === Platform.IOS && styles['SplitLayout--ios'],
      )}
      popout={popout}
      modal={modal}
      getRootRef={getRootRef}
    >
      {header}
      <div
        {...restProps}
        ref={getRef}
        className={classNamesString(
          styles['SplitLayout__inner'],
          !!header && styles['SplitLayout__inner--header'],
          className,
        )}
      >
        {children}
      </div>
    </PopoutRoot>
  );
};
