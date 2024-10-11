'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutRoot.module.css';

/**
 * @private
 */
export const PopoutRootPopout = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>): React.ReactNode => (
  <div className={classNames(styles.popout, className)} {...restProps} />
);

/**
 * @private
 */
export const PopoutRootModal = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>): React.ReactNode => (
  <div className={classNames(styles.modal, className)} {...restProps} />
);

export interface PopoutRootProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

/**
 * @private
 */
export const PopoutRoot = ({
  popout,
  modal,
  children,
  ...restProps
}: PopoutRootProps): React.ReactNode => {
  const { popoutModalRoot } = React.useContext(AppRootContext);

  return (
    <RootComponent {...restProps} baseClassName={styles.host}>
      {children}
      <div ref={popoutModalRoot}>
        {!!popout && <PopoutRootPopout>{popout}</PopoutRootPopout>}
        {modal}
      </div>
    </RootComponent>
  );
};
