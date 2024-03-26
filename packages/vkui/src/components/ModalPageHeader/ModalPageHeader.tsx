import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../types';
import { ModalPageContext } from '../ModalPage/ModalPageContext';
import { PanelHeader, PanelHeaderProps } from '../PanelHeader/PanelHeader';
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
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const { isDesktop, sizeX } = useAdaptivityWithJSMediaQueries();
  const { labelId } = React.useContext(ModalPageContext);

  return (
    <div
      className={classNames(
        styles['ModalPageHeader'],
        platform !== 'vkcom' && styles['ModalPageHeader--withGaps'],
        isDesktop && styles['ModalPageHeader--desktop'],
      )}
      ref={getRootRef}
    >
      <PanelHeader
        className={classNames('vkuiInternalModalPageHeader__in', className)}
        typographyProps={{
          Component: 'h2',
          id: labelId,
          ...typographyProps,
        }}
        {...restProps}
        fixed={false}
        delimiter="none"
        transparent
      >
        {children}
      </PanelHeader>
      {!noSeparator && <Separator wide={sizeX === 'regular'} />}
    </div>
  );
};
