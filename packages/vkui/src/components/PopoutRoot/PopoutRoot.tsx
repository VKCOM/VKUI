import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { blurActiveElement, useDOM } from '../../lib/dom';
import { HasRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import styles from './PopoutRoot.module.css';

interface PopoutRootPopoutProps {
  children: React.ReactNode;
}

const PopoutRootPopout = ({ children }: PopoutRootPopoutProps) => {
  return <div className={classNames(styles['PopoutRoot__popout'])}>{children}</div>;
};

interface PopoutRootModalProps {
  children: React.ReactNode;
}

const PopoutRootModal = ({ children }: PopoutRootModalProps) => {
  return <div className={styles['PopoutRoot__modal']}>{children}</div>;
};

export interface PopoutRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRoot = ({
  popout,
  modal,
  children,
  getRootRef,
  className,
  ...restProps
}: PopoutRootProps) => {
  const { document } = useDOM();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <div {...restProps} className={classNames(styles['PopoutRoot'], className)} ref={getRootRef}>
      {children}
      <AppRootPortal>
        {!!popout && <PopoutRootPopout>{popout}</PopoutRootPopout>}
        {!!modal && <PopoutRootModal>{modal}</PopoutRootModal>}
      </AppRootPortal>
    </div>
  );
};
