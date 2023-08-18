import * as React from 'react';
import { blurActiveElement, useDOM } from '../../lib/dom';
import { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutRoot.module.css';

interface PopoutRootPopoutProps {
  children: React.ReactNode;
}

const PopoutRootPopout = (props: PopoutRootPopoutProps) => (
  <div className={styles['PopoutRoot__popout']} {...props} />
);

interface PopoutRootModalProps {
  children: React.ReactNode;
}

const PopoutRootModal = (props: PopoutRootModalProps) => (
  <div className={styles['PopoutRoot__modal']} {...props} />
);

export interface PopoutRootProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRoot = ({ popout, modal, children, ...restProps }: PopoutRootProps) => {
  const { document } = useDOM();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <RootComponent {...restProps} baseClassName={styles['PopoutRoot']}>
      {children}
      <AppRootPortal>
        {!!popout && <PopoutRootPopout>{popout}</PopoutRootPopout>}
        {!!modal && <PopoutRootModal>{modal}</PopoutRootModal>}
      </AppRootPortal>
    </RootComponent>
  );
};
