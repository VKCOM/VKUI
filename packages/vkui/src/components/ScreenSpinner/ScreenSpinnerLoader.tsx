import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Spinner } from '../Spinner/Spinner';
import type { SpinnerProps } from '../Spinner/Spinner';
import { ScreenSpinnerContext } from './context';
import styles from './ScreenSpinner.module.css';

export const ScreenSpinnerLoader: React.FC<SpinnerProps> = ({
  size = 'large',
  children,
  ...restProps
}: SpinnerProps) => {
  const { subtitle } = React.useContext(ScreenSpinnerContext);
  const a11yText = children ? children : subtitle ?? 'Пожалуйста, подождите...';
  return (
    <Spinner
      className={classNames(
        styles['ScreenSpinner__spinner'],
        !subtitle && styles['ScreenSpinner__spinner--transition'],
      )}
      size={size}
      noColor
      {...restProps}
    >
      {a11yText}
    </Spinner>
  );
};

ScreenSpinnerLoader.displayName = 'ScreenSpinnerLoader';
