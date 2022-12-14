import * as React from 'react';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { HasRef } from '../../types';
import { Platform } from '../../lib/platform';
import { Separator } from '../Separator/Separator';
import { PanelHeader, PanelHeaderProps } from '../PanelHeader/PanelHeader';
import { classNames } from '@vkontakte/vkjs';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
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

  return (
    <div
      className={classNames(
        styles['ModalPageHeader'],
        getPlatformClassName(styles['ModalPageHeader'], platform),
        platform !== Platform.VKCOM && styles['ModalPageHeader--withGaps'],
        isDesktop && styles['ModalPageHeader--desktop'],
      )}
      ref={getRef}
    >
      <PanelHeader
        className={classNames(styles['ModalPageHeader__in'], className)}
        {...restProps}
        fixed={false}
        separator={false}
        transparent
      >
        {children}
      </PanelHeader>
      {hasSeparator && <Separator wide />}
    </div>
  );
};
