import React, { HTMLAttributes, ReactNode, FC } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasRef, HasRootRef } from '../../types';
import PopoutRoot from '../PopoutRoot/PopoutRoot';
import usePlatform from '../../hooks/usePlatform';

export interface SplitLayoutProps extends
  HTMLAttributes<HTMLDivElement>,
  HasChildren,
  HasRootRef<HTMLDivElement>,
  HasRef<HTMLDivElement> {
  popout?: ReactNode;
  modal?: ReactNode;
  header?: ReactNode;
}

export const SplitLayout: FC<SplitLayoutProps> = ({
  popout,
  modal,
  header,
  children,
  className,
  getRootRef,
  getRef,
  ...restProps
}) => {
  const platform = usePlatform();

  return (
    <PopoutRoot
      className={getClassName('SplitLayout', platform)}
      popout={popout}
      modal={modal}
      getRootRef={getRootRef}
    >
      {header}
      <div {...restProps} ref={getRef} className={classNames('SplitLayout__inner', className, {
        'SplitLayout__inner--header': !!header,
      })}>
        {children}
      </div>
    </PopoutRoot>
  );
};
