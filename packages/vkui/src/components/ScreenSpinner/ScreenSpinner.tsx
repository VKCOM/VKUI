'use client';

import * as React from 'react';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { ScreenSpinnerContainer } from './ScreenSpinnerContainer';
import { ScreenSpinnerLoader } from './ScreenSpinnerLoader';
import { ScreenSpinnerSwapIcon } from './ScreenSpinnerSwapIcon';
import type { ScreenSpinnerProps } from './types';

export type { ScreenSpinnerProps };

/**
 * @see https://vkui.io/components/screen-spinner
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
  visibilityDelay,
  ...restProps
}: ScreenSpinnerProps): React.ReactNode => {
  useScrollLock();

  return (
    <AppRootPortal usePortal={usePortal}>
      <PopoutWrapper className={className} style={style} noBackground strategy="fixed">
        <ScreenSpinnerContainer
          state={state}
          mode={mode}
          label={label}
          customIcon={customIcon}
          visibilityDelay={visibilityDelay}
        >
          <ScreenSpinnerLoader {...restProps} />
          <ScreenSpinnerSwapIcon onClick={onClick} cancelLabel={cancelLabel} />
        </ScreenSpinnerContainer>
      </PopoutWrapper>
    </AppRootPortal>
  );
};

ScreenSpinner.Container = ScreenSpinnerContainer;
ScreenSpinner.Loader = ScreenSpinnerLoader;
ScreenSpinner.SwapIcon = ScreenSpinnerSwapIcon;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(ScreenSpinner.Container, 'ScreenSpinner.Container');
  defineComponentDisplayNames(ScreenSpinner.Loader, 'ScreenSpinner.Loader');
  defineComponentDisplayNames(ScreenSpinner.SwapIcon, 'ScreenSpinner.SwapIcon');
}
