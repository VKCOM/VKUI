import * as React from 'react';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { type SpinnerProps } from '../Spinner/Spinner';
import { ScreenSpinnerContainer } from './ScreenSpinnerContainer';
import { ScreenSpinnerLoader } from './ScreenSpinnerLoader';
import { ScreenSpinnerSwapIcon } from './ScreenSpinnerSwapIcon';

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  mode?: 'shadow' | 'overlay';
  cancelLabel?: string;
}

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
  ...restProps
}: ScreenSpinnerProps): React.ReactNode => {
  useScrollLock();

  return (
    <PopoutWrapper className={className} style={style} noBackground>
      <ScreenSpinnerContainer state={state} mode={mode}>
        <ScreenSpinnerLoader {...restProps} />
        <ScreenSpinnerSwapIcon onClick={onClick} cancelLabel={cancelLabel} />
      </ScreenSpinnerContainer>
    </PopoutWrapper>
  );
};

ScreenSpinner.displayName = 'ScreenSpinner';

ScreenSpinner.Container = ScreenSpinnerContainer;
ScreenSpinner.Container.displayName = 'ScreenSpinner.Container';

ScreenSpinner.Loader = ScreenSpinnerLoader;
ScreenSpinner.Loader.displayName = 'ScreenSpinner.Loader';

ScreenSpinner.SwapIcon = ScreenSpinnerSwapIcon;
ScreenSpinner.SwapIcon.displayName = 'ScreenSpinner.SwapIcon';
