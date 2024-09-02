import * as React from 'react';
import { Spinner } from '../Spinner/Spinner';
import type { SpinnerProps } from '../Spinner/Spinner';
import styles from './ScreenSpinner.module.css';

export const ScreenSpinnerLoader: React.FC<SpinnerProps> = ({
  size = 'large',
  children = 'Пожалуйста, подождите...',
  ...restProps
}: SpinnerProps) => {
  return (
    <Spinner className={styles['ScreenSpinner__spinner']} size={size} noColor {...restProps}>
      {children}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinnerLoader';
