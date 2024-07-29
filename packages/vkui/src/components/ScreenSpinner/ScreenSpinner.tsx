import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useKeyboardClick } from '../../hooks/useKeyboardClick';
import { mergeCalls } from '../../lib/mergeCalls';
import { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { RootComponent } from '../RootComponent/RootComponent';
import { Spinner, SpinnerProps } from '../Spinner/Spinner';
import { Icon48CancelCircle } from './Icon48CancelCircle';
import { Icon48DoneOutline } from './Icon48DoneOutline';
import styles from './ScreenSpinner.module.css';

export interface ScreenSpinnerProps extends SpinnerProps {
  state?: 'loading' | 'cancelable' | 'done' | 'error';
  cancelLabel?: string;
}

export interface ScreenSpinnerContextProps {
  state: NonNullable<ScreenSpinnerProps['state']>;
}

export const ScreenSpinnerContext: React.Context<ScreenSpinnerContextProps> =
  React.createContext<ScreenSpinnerContextProps>({
    state: 'loading',
  });

const stateClassNames = {
  cancelable: styles['ScreenSpinner--state-cancelable'],
  done: styles['ScreenSpinner--state-done'],
  error: styles['ScreenSpinner--state-error'],
};

const ScreenSpinnerLoader: React.FC<SpinnerProps> = ({
  size = 'large',
  children = 'Пожалуйста, подождите...',
  ...restProps
}: SpinnerProps) => {
  return (
    <Spinner className={styles['ScreenSpinner__spinner']} size={size} {...restProps}>
      {children}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinner.Loader';

type ScreenSpinnerSwapIconProps = HTMLAttributesWithRootRef<HTMLElement>;

const ScreenSpinnerSwapIcon: React.FC<ScreenSpinnerSwapIconProps> = (
  props: ScreenSpinnerSwapIconProps,
) => {
  const { state } = React.useContext(ScreenSpinnerContext);

  const Icon = {
    loading: () => null,
    cancelable: Icon24Cancel,
    done: Icon48DoneOutline,
    error: Icon48CancelCircle,
  }[state];

  return (
    <RootComponent baseClassName={styles['ScreenSpinner__icon']} {...props}>
      <Icon />
    </RootComponent>
  );
};

ScreenSpinnerSwapIcon.displayName = 'ScreenSpinner.SwapIcon';

type ScreenSpinnerContainerProps = HTMLAttributesWithRootRef<HTMLSpanElement> &
  Pick<ScreenSpinnerProps, 'state' | 'cancelLabel'>;

const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
  state = 'loading',
  onKeyDown,
  cancelLabel = 'Отменить',
  ...restProps
}: ScreenSpinnerContainerProps) => {
  const keyboardHandlers = useKeyboardClick();

  let clickableProps: React.HTMLAttributes<HTMLSpanElement> | undefined = undefined;
  if (state === 'cancelable') {
    const handlers = mergeCalls(keyboardHandlers, {
      onKeyDown,
    });
    clickableProps = { ...handlers, 'tabIndex': 0, 'role': 'button', 'aria-label': cancelLabel };
  }

  return (
    <ScreenSpinnerContext.Provider value={{ state }}>
      <RootComponent
        baseClassName={classNames(
          styles['ScreenSpinner'],
          state !== 'loading' && stateClassNames[state],
        )}
        {...clickableProps}
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
  ...restProps
}: ScreenSpinnerProps): React.ReactNode => {
  useScrollLock();

  return (
    <PopoutWrapper className={className} style={style} noBackground>
      <ScreenSpinnerContainer state={state} onClick={onClick} cancelLabel={cancelLabel}>
        <ScreenSpinnerLoader {...restProps} />
        <ScreenSpinnerSwapIcon />
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
