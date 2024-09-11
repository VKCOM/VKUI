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
  Pick<ScreenSpinnerProps, 'state' | 'mode' | 'caption'>;

export const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
  state = 'loading',
  mode = 'shadow',
  caption,
  children,
  ...restProps
}: ScreenSpinnerContainerProps) => {
  return (
    <ScreenSpinnerContext.Provider value={{ state, caption }}>
      <RootComponent
        baseClassName={classNames(
          styles['ScreenSpinner'],
          modeClassNames[mode],
          state !== 'loading' && stateClassNames[state],
          hasReactNode(caption) && styles['ScreenSpinner--has-caption'],
        )}
        {...restProps}
      >
        <div className={styles['ScreenSpinner__icon-slot']}>{children}</div>
        {hasReactNode(caption) && (
          <Footnote className={styles.ScreenSpinner__caption} aria-hidden>
            {caption}
          </Footnote>
        )}
      </RootComponent>
    </ScreenSpinnerContext.Provider>
  );
};

ScreenSpinnerContainer.displayName = 'ScreenSpinnerContainer';
