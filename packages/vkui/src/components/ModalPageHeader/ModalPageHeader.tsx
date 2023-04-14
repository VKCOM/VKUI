import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { HasRef } from '../../types';
import { ModalPageContext } from '../ModalPage/ModalPageContext';
import { PanelHeader, PanelHeaderProps } from '../PanelHeader/PanelHeader';
import { Separator } from '../Separator/Separator';
import styles from './ModalPageHeader.module.css';

export interface ModalPageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<PanelHeaderProps, 'fixed' | 'shadow'>,
    HasRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
export const ModalPageHeader = ({
  children,
  separator = true,
  getRef,
  className,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const hasSeparator = separator && platform === Platform.VKCOM;
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const { labelId } = React.useContext(ModalPageContext);

  return (
    <div
      className={classNames(
        styles['ModalPageHeader'],
        platform !== Platform.VKCOM && styles['ModalPageHeader--withGaps'],
        isDesktop && styles['ModalPageHeader--desktop'],
      )}
      ref={getRef}
    >
      <PanelHeader
        className={classNames('vkuiInternalModalPageHeader__in', className)}
        {...restProps}
        fixed={false}
        separator={false}
        transparent
      >
        <PanelHeader.Content Component="h2" id={labelId}>
          {children}
        </PanelHeader.Content>
      </PanelHeader>
      {hasSeparator && <Separator wide />}
    </div>
  );
};
