import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import { ScreenSpinnerContext } from './context';
import { type ScreenSpinnerProps } from './types';
import styles from './ScreenSpinner.module.css';

const stateClassNames = {
  cancelable: styles.stateCancelable,
  done: styles.stateDone,
  error: styles.stateError,
  custom: styles.stateCustom,
};

const modeClassNames = {
  shadow: styles.modeShadow,
  overlay: styles.modeOverlay,
};

type ScreenSpinnerContainerProps = HTMLAttributesWithRootRef<HTMLSpanElement> &
  Pick<ScreenSpinnerProps, 'state' | 'mode' | 'label' | 'customIcon'>;

export const ScreenSpinnerContainer: React.FC<ScreenSpinnerContainerProps> = ({
  state = 'loading',
  mode = 'shadow',
  customIcon,
  label,
  children,
  ...restProps
}: ScreenSpinnerContainerProps) => {
  return (
    <ScreenSpinnerContext.Provider value={{ state, label, customIcon }}>
      <RootComponent
        baseClassName={classNames(
          styles.host,
          modeClassNames[mode],
          state !== 'loading' && stateClassNames[state],
          hasReactNode(label) && styles.hasLabel,
        )}
        {...restProps}
      >
        <div className={styles.iconSlot}>{children}</div>
        {hasReactNode(label) && (
          <Footnote className={styles.label} aria-hidden>
            {label}
          </Footnote>
        )}
      </RootComponent>
    </ScreenSpinnerContext.Provider>
  );
};

ScreenSpinnerContainer.displayName = 'ScreenSpinnerContainer';
