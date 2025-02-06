'use client';

import * as React from 'react';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { ScreenSpinnerContainer } from './ScreenSpinnerContainer';
import { ScreenSpinnerLoader } from './ScreenSpinnerLoader';
import { ScreenSpinnerSwapIcon } from './ScreenSpinnerSwapIcon';
import type { ScreenSpinnerProps } from './types';

export type { ScreenSpinnerProps };

/**
 * @see https://vkcom.github.io/VKUI/#/ScreenSpinner
 */
export const ScreenSpinner: React.FC<ScreenSpinnerProps> & {
  Container: typeof ScreenSpinnerContainer;
  Loader: typeof ScreenSpinnerLoader;
  SwapIcon: typeof ScreenSpinnerSwapIcon;
} = ({
  style,
  className,
  state = 'loading',
  onClick,
  cancelLabel,
  mode,
  label,
  customIcon,
  usePortal,
  ...restProps
}: ScreenSpinnerProps): React.ReactNode => {
  useScrollLock();

  return (
    <AppRootPortal usePortal={usePortal}>
      <PopoutWrapper className={className} style={style} noBackground strategy="fixed">
        <ScreenSpinnerContainer state={state} mode={mode} label={label} customIcon={customIcon}>
          <ScreenSpinnerLoader {...restProps} />
          <ScreenSpinnerSwapIcon onClick={onClick} cancelLabel={cancelLabel} />
        </ScreenSpinnerContainer>
      </PopoutWrapper>
    </AppRootPortal>
  );
};

ScreenSpinner.displayName = 'ScreenSpinner';

ScreenSpinner.Container = ScreenSpinnerContainer;
ScreenSpinner.Container.displayName = 'ScreenSpinner.Container';

ScreenSpinner.Loader = ScreenSpinnerLoader;
ScreenSpinner.Loader.displayName = 'ScreenSpinner.Loader';

ScreenSpinner.SwapIcon = ScreenSpinnerSwapIcon;
ScreenSpinner.SwapIcon.displayName = 'ScreenSpinner.SwapIcon';
