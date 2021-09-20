import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRef, HasRootRef } from '../../types';
import { PopoutRoot } from '../PopoutRoot/PopoutRoot';
import { usePlatform } from '../../hooks/usePlatform';
import './SplitLayout.css';

export interface SplitLayoutProps extends
  React.HTMLAttributes<HTMLDivElement>,
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

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  popout,
  modal,
  header,
  children,
  getRootRef,
  getRef,
  ...restProps
}: SplitLayoutProps) => {
  const platform = usePlatform();

  return (
    <PopoutRoot
      vkuiClass={getClassName('SplitLayout', platform)}
      popout={popout}
      modal={modal}
      getRootRef={getRootRef}
    >
      {header}
      <div {...restProps} ref={getRef} vkuiClass={classNames('SplitLayout__inner', {
        'SplitLayout__inner--header': !!header,
      })}>
        {children}
      </div>
    </PopoutRoot>
  );
};
