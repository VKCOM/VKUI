import React, { FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { Icon24Spinner, Icon32Spinner, Icon44Spinner, Icon16Spinner } from '@vkontakte/icons';
import usePlatform from '../../hooks/usePlatform';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'regular' | 'large' | 'medium';
}

const svgSpinner = (size: SpinnerProps['size']): React.ReactElement => {
  switch (size) {
    case 'large':
      return <Icon44Spinner className="Spinner__self" />;
    case 'medium':
      return <Icon32Spinner className="Spinner__self" />;
    case 'small':
      return <Icon16Spinner className="Spinner__self" />;
    default:
      return <Icon24Spinner className="Spinner__self" />;
  }
};

const Spinner: FunctionComponent<SpinnerProps> = ({ className, size, ...restProps }: SpinnerProps) => {
  const platform = usePlatform();

  return (
    <div {...restProps} className={classNames(getClassName('Spinner', platform), className)}>
      {svgSpinner(size)}
    </div>
  );
};

Spinner.defaultProps = {
  size: 'regular',
};

export default React.memo(Spinner);
