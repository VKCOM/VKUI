import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { mergeCalls } from '../../lib/mergeCalls';
import { clickByKeyboardHandler } from '../../lib/utils';
import type { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { RootComponent } from '../RootComponent/RootComponent';
import { Spinner, type SpinnerProps } from '../Spinner/Spinner';
import { Icon48CancelCircle } from './Icon48CancelCircle';
import { Icon48DoneOutline } from './Icon48DoneOutline';
import styles from './ScreenSpinner.module.css';

const stateClassNames = {
  cancelable: styles['ScreenSpinner--state-cancelable'],
  done: styles['ScreenSpinner--state-done'],
  error: styles['ScreenSpinner--state-error'],
};

const modeClassNames = {
  shadow: styles['ScreenSpinner--mode-shadow'],
  overlay: styles['ScreenSpinner--mode-overlay'],
};

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  mode?: 'shadow' | 'overlay';
  cancelLabel?: string;
}

export interface ScreenSpinnerContextProps {
  state: NonNullable<ScreenSpinnerProps['state']>;
}

export const ScreenSpinnerContext: React.Context<ScreenSpinnerContextProps> =
  React.createContext<ScreenSpinnerContextProps>({
    state: 'loading',
  });

const ScreenSpinnerLoader: React.FC<SpinnerProps> = ({
  size = 'large',
  children = 'Пожалуйста, подождите...',
  ...restProps
}: SpinnerProps) => {
  return (
    <Spinner className={styles['ScreenSpinner__spinner']} size={size} noColor {...restProps}>
      {children}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinner.Loader';

type ScreenSpinnerSwapIconProps = HTMLAttributesWithRootRef<HTMLElement> & {
  cancelLabel?: ScreenSpinnerProps['cancelLabel'];
};

const ScreenSpinnerCancelIcon: React.FC<ScreenSpinnerSwapIconProps> = ({
  onKeyDown,
  'aria-label': ariaLabel = 'Отменить',
  ...restProps
}: ScreenSpinnerSwapIconProps) => {
  const handlers = mergeCalls(
    { onKeyDown: clickByKeyboardHandler },
    {
      onKeyDown,
    },
  );
  let clickableProps: React.HTMLAttributes<HTMLSpanElement> = {
    ...handlers,
    'tabIndex': 0,
    'role': 'button',
    'aria-label': ariaLabel,
  };

  return (
    <RootComponent baseClassName={styles['ScreenSpinner__icon']} {...clickableProps} {...restProps}>
      <Icon24Cancel />
    </RootComponent>
  );
};

const ScreenSpinnerSwapIcon: React.FC<ScreenSpinnerSwapIconProps> = ({
  cancelLabel,
  ...restProps
}: ScreenSpinnerSwapIconProps) => {
  const { state } = React.useContext(ScreenSpinnerContext);

  if (state === 'cancelable') {
    return <ScreenSpinnerCancelIcon aria-label={cancelLabel} {...restProps} />;
  }

  const Icon = {
    loading: () => null,
    done: Icon48DoneOutline,
    error: Icon48CancelCircle,
  }[state];

  return (
    <RootComponent baseClassName={styles['ScreenSpinner__icon']} {...restProps}>
      <Icon />
    </RootComponent>
  );
};

ScreenSpinnerSwapIcon.displayName = 'ScreenSpinner.SwapIcon';

type ScreenSpinnerContainerProps = HTMLAttributesWithRootRef<HTMLSpanElement> &
  Pick<ScreenSpinnerProps, 'state' | 'mode'>;

const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
  state = 'loading',
  mode = 'shadow',
  ...restProps
}: ScreenSpinnerContainerProps) => {
  return (
    <ScreenSpinnerContext.Provider value={{ state }}>
      <RootComponent
        baseClassName={classNames(
          styles['ScreenSpinner'],
          modeClassNames[mode],
          state !== 'loading' && stateClassNames[state],
        )}
        {...restProps}
      />
    </ScreenSpinnerContext.Provider>
  );
};

ScreenSpinnerContainer.displayName = 'ScreenSpinner.Container';

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
  mode = 'shadow',
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
