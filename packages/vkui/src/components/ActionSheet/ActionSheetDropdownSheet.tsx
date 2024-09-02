import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

const stopPropagation: React.MouseEventHandler = (e) => e.stopPropagation();

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
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const platform = usePlatform();

  return (
    <FocusTrap
      {...restProps}
      onClick={stopPropagation}
      className={classNames(
        styles['ActionSheet'],
        platform === 'ios' && styles['ActionSheet--ios'],
        closing ? styles['ActionSheet--closing'] : styles['ActionSheet--opening'],
        sizeY === 'compact' && styles['ActionSheet--sizeY-compact'],
        className,
      )}
    >
      {children}
    </FocusTrap>
  );
};
