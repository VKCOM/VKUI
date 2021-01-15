import React, { FC } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { Icon24Spinner, Icon32Spinner, Icon44Spinner, Icon16Spinner } from '@vkontakte/icons';
import usePlatform from '../../hooks/usePlatform';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'regular' | 'large' | 'medium';
  width?: number;
  height?: number;
}

const Spinner: FC<SpinnerProps> = ({ className, size, width, height, ...restProps }: SpinnerProps) => {
  const platform = usePlatform();
  let SpinnerComponent = Icon24Spinner;

  switch (size) {
    case 'large':
      SpinnerComponent = Icon44Spinner;
      break;
    case 'medium':
      SpinnerComponent = Icon32Spinner;
      break;
    case 'small':
      SpinnerComponent = Icon16Spinner;
      break;
  }

  return (
    <div {...restProps} className={classNames(getClassName('Spinner', platform), className)}>
      <SpinnerComponent width={width} height={height} className="Spinner__self" />
    </div>
  );
};

Spinner.defaultProps = {
  size: 'regular',
};

export default React.memo(Spinner);
