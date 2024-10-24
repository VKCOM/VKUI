'use client';

import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import { mergeCalls } from '../../lib/mergeCalls';
import { clickByKeyboardHandler } from '../../lib/utils';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Icon48CancelCircle } from './Icon48CancelCircle';
import { Icon48DoneOutline } from './Icon48DoneOutline';
import { ScreenSpinnerContext } from './context';
import { type ScreenSpinnerProps } from './types';
import styles from './ScreenSpinner.module.css';

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
    <RootComponent baseClassName={styles.icon} {...clickableProps} {...restProps}>
      <Icon24Cancel />
    </RootComponent>
  );
};

ScreenSpinnerCancelIcon.displayName = 'ScreenSpinnerCancelIcon';

export const ScreenSpinnerSwapIcon: React.FC<ScreenSpinnerSwapIconProps> = ({
  cancelLabel,
  ...restProps
}: ScreenSpinnerSwapIconProps) => {
  const { state, customIcon } = React.useContext(ScreenSpinnerContext);

  if (state === 'cancelable') {
    return <ScreenSpinnerCancelIcon aria-label={cancelLabel} {...restProps} />;
  }

  const getContent = () => {
    if (state === 'custom') {
      return customIcon;
    }

    const Icon = {
      loading: () => null,
      done: Icon48DoneOutline,
      error: Icon48CancelCircle,
    }[state];

    return <Icon />;
  };

  return (
    <RootComponent baseClassName={styles.icon} {...restProps}>
      {getContent()}
    </RootComponent>
  );
};

ScreenSpinnerSwapIcon.displayName = 'ScreenSpinnerSwapIcon';
