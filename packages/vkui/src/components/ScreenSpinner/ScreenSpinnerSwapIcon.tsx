'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { Icon24Cancel } from '@vkontakte/icons';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { Icon48CancelCircle } from './Icon48CancelCircle';
import { Icon48DoneOutline } from './Icon48DoneOutline';
import { ScreenSpinnerContext } from './context';
import type { ScreenSpinnerProps } from './types';
import styles from './ScreenSpinner.module.css';

type ScreenSpinnerSwapIconProps = HTMLAttributesWithRootRef<HTMLElement> & {
  cancelLabel?: ScreenSpinnerProps['cancelLabel'] | undefined;
};

const ScreenSpinnerCancelIcon = ({
  'aria-label': ariaLabel = 'Отменить',
  ...restProps
}: ScreenSpinnerSwapIconProps) => {
  return (
    <RootComponent
      Component="button"
      type="button"
      baseClassName={styles.icon}
      aria-label={ariaLabel}
      {...restProps}
    >
      <Icon24Cancel />
    </RootComponent>
  );
};

export const ScreenSpinnerSwapIcon = ({
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
