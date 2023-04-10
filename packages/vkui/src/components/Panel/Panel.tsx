import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { NavIdProps } from '../../lib/getNavId';
import { Platform } from '../../lib/platform';
import { HasRootRef } from '../../types';
import { TooltipContainer } from '../Tooltip/TooltipContainer';
import { Touch } from '../Touch/Touch';
import styles from './Panel.module.css';

const sizeXClassNames = {
  none: styles['Panel--sizeX-none'],
  [SizeType.COMPACT]: styles['Panel--sizeX-compact'],
  [SizeType.REGULAR]: styles['Panel--sizeX-regular'],
};

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    NavIdProps {
  centered?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Panel
 */
export const Panel = ({
  centered = false,
  children,
  getRootRef,
  nav,
  className,
  ...restProps
}: PanelProps) => {
  const platform = usePlatform();
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(
        styles['Panel'],
        sizeXClassNames[sizeX],
        centered && 'vkuiInternalPanel--centered',
        className,
      )}
    >
      <Touch
        Component={TooltipContainer}
        className={classNames(styles['Panel__in'], 'vkuiInternalPanel__in')}
      >
        {platform === Platform.IOS && <div className="vkuiInternalPanel__fade" />}
        <div className={styles['Panel__in-before']} />
        {centered ? <div className={styles['Panel__centered']}>{children}</div> : children}
        <div className={styles['Panel__in-after']} />
      </Touch>
    </div>
  );
};
