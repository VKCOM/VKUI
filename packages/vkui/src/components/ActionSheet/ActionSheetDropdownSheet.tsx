'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { mergeCalls } from '../../lib/mergeCalls';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

export type ActionSheetDropdownProps = Omit<
  SharedDropdownProps,
  'popupDirection' | 'popupOffsetDistance' | 'placement'
>;

export const ActionSheetDropdownSheet = ({
  children,
  closing,
  // these 2 props are only omitted - ActionSheetDesktop compat
  toggleRef,
  className,
  onClick,
  allowClickPropagation = false,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!allowClickPropagation) {
      stopPropagation(event);
    }
  };

  const clickHandlers = mergeCalls({ onClick: handleClick }, { onClick });

  return (
    <FocusTrap
      {...restProps}
      {...clickHandlers}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        closing ? styles.closing : styles.opening,
        sizeY === 'compact' && styles.sizeYCompact,
        className,
      )}
    >
      {children}
    </FocusTrap>
  );
};
