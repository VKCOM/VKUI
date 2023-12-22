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
    Omit<PanelHeaderProps, 'fixed' | 'shadow'>,
    HasRef<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
export const ModalPageHeader = ({
  children,
  separator = true,
  getRootRef,
  className,
  typographyProps,
  ...restProps
}: ModalPageHeaderProps) => {
  const platform = usePlatform();
  const hasSeparator = separator && platform === 'vkcom';
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const { labelId } = React.useContext(ModalPageContext);

  return (
    <div
      className={classNames(
        styles.host,
        platform !== 'vkcom' && styles.hostWithGaps,
        isDesktop && styles.hostDesktop,
      )}
      ref={getRootRef}
    >
      <PanelHeader
        className={classNames('vkuiInternalModalPageHeaderIn', className)}
        typographyProps={{
          Component: 'h2',
          id: labelId,
          ...typographyProps,
        }}
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
