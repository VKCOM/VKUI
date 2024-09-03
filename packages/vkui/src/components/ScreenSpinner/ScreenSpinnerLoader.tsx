import * as React from 'react';
import { Spinner } from '../Spinner/Spinner';
import type { SpinnerProps } from '../Spinner/Spinner';
import styles from './ScreenSpinner.module.css';

export const ScreenSpinnerLoader: React.FC<Omit<SpinnerProps, 'size'>> = ({
  children = 'Пожалуйста, подождите...',
  ...restProps
}) => {
  return (
    <Spinner className={styles['ScreenSpinner__spinner']} size="large" noColor {...restProps}>
      {children}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinnerLoader';
