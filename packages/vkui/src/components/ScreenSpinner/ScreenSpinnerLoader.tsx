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
  const { caption } = React.useContext(ScreenSpinnerContext);
  // TODO [>=7]: см. https://github.com/VKCOM/VKUI/pull/7505#discussion_r1754153438
  const a11yText = children ? children : caption ?? 'Пожалуйста, подождите...';
  return (
    <Spinner
      className={classNames(styles.spinner, !caption && styles.spinnerTransition)}
      size="xl"
      noColor
      {...restProps}
    >
      {a11yText}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinnerLoader';
