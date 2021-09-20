import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { Icon24Spinner, Icon32Spinner, Icon44Spinner, Icon16Spinner } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import './Spinner.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'regular' | 'large' | 'medium';
}

const Spinner: React.FC<SpinnerProps> = ({ size, ...restProps }: SpinnerProps) => {
  const platform = usePlatform();

  let SpinnerIcon = Icon24Spinner;

  if (size === 'large') {
    SpinnerIcon = Icon44Spinner;
  }

  if (size === 'medium') {
    SpinnerIcon = Icon32Spinner;
  }

  if (size === 'small') {
    SpinnerIcon = Icon16Spinner;
  }

  return (
    <span role="status" {...restProps} vkuiClass={getClassName('Spinner', platform)}>
      <SpinnerIcon aria-hidden="true" vkuiClass="Spinner__self" />
    </span>
  );
};

Spinner.defaultProps = {
  'size': 'regular',
  'aria-label': 'Загружается...',
};

export default React.memo(Spinner);
