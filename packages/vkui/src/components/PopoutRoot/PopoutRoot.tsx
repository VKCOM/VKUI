import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { blurActiveElement, useDOM } from '../../lib/dom';
import { HTMLAttributesWithRootRef } from '../../types';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutRoot.module.css';

const PopoutRootPopout = ({
  className,
  ...restProps
}: HTMLAttributesWithRootRef<HTMLDivElement>) => (
  <div className={classNames(styles['PopoutRoot__popout'], className)} {...restProps} />
);

const PopoutRootModal = ({
  className,
  ...restProps
}: HTMLAttributesWithRootRef<HTMLDivElement>) => (
  <div className={classNames(styles['PopoutRoot__modal'], className)} {...restProps} />
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
