import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
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
  Pick<ScreenSpinnerProps, 'state' | 'mode' | 'subtitle'>;

export const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
  state = 'loading',
  mode = 'shadow',
  subtitle,
  children,
  ...restProps
}: ScreenSpinnerContainerProps) => {
  return (
    <ScreenSpinnerContext.Provider value={{ state, subtitle }}>
      <RootComponent
        baseClassName={classNames(
          styles['ScreenSpinner'],
          modeClassNames[mode],
          state !== 'loading' && stateClassNames[state],
          hasReactNode(subtitle) && styles['ScreenSpinner--has-subtitle'],
        )}
        {...restProps}
      >
        <div className={styles['ScreenSpinner__icon-slot']}>{children}</div>
        {hasReactNode(subtitle) && (
          <Footnote className={styles.ScreenSpinner__subtitle}>{subtitle}</Footnote>
        )}
      </RootComponent>
    </ScreenSpinnerContext.Provider>
  );
};

ScreenSpinnerContainer.displayName = 'ScreenSpinnerContainer';
