'use client';

import * as React from 'react';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutRoot.module.css';

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
        {popout}
        {modal}
      </div>
    </RootComponent>
  );
};
