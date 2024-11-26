'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useModalContext } from '../../context/ModalContext';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import type { HasRef, HasRootRef } from '../../types';
import { PanelHeader, type PanelHeaderProps } from '../PanelHeader/PanelHeader';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageHeader.module.css';

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<PanelHeaderProps, 'fixed' | 'shadow' | 'delimiter'>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  noSeparator?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
export const ModalPageHeader = ({
  children,
  noSeparator = false,
  getRootRef,
  className,
  typographyProps,
  ...restProps
}: ModalPageHeaderProps): React.ReactNode => {
  const platform = usePlatform();
  const { isDesktop, sizeX } = useAdaptivityWithJSMediaQueries();
  const modalContext = useModalContext();

  return (
    <>
      <div
        className={classNames(
          styles.host,
          platform !== 'vkcom' && styles.hostWithGaps,
          isDesktop && styles.hostDesktop,
        )}
        ref={getRootRef}
      >
        <PanelHeader
          className={classNames('vkuiInternalModalPageHeader__in', className)}
          typographyProps={{
            Component: 'h2',
            id: modalContext.labelId,
            ...typographyProps,
          }}
          {...restProps}
          fixed={false}
          delimiter="none"
          transparent
        >
          {children}
        </PanelHeader>
      </div>
      {!noSeparator && <Separator padding={sizeX !== 'regular'} />}
    </>
  );
};
