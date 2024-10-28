'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Spinner } from '../Spinner/Spinner';
import type { SpinnerProps } from '../Spinner/Spinner';
import { ScreenSpinnerContext } from './context';
import styles from './ScreenSpinner.module.css';

export const ScreenSpinnerLoader: React.FC<Omit<SpinnerProps, 'size'>> = ({
  children,
  ...restProps
}) => {
  const { label } = React.useContext(ScreenSpinnerContext);
  const a11yText = children ?? label;
  return (
    <Spinner
      className={classNames(styles.spinner, !label && styles.spinnerTransition)}
      size="xl"
      noColor
      {...restProps}
    >
      {a11yText}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinnerLoader';
