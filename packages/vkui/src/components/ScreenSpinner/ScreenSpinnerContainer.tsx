import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { ScreenSpinnerContext } from './context';
import { type ScreenSpinnerProps } from './types';
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

type ScreenSpinnerContainerProps = HTMLAttributesWithRootRef<HTMLSpanElement> &
  Pick<ScreenSpinnerProps, 'state' | 'mode'>;

export const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
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

ScreenSpinnerContainer.displayName = 'ScreenSpinnerContainer';
