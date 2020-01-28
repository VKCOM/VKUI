import React, { FunctionComponent } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Spinner24 from '@vkontakte/icons/dist/24/spinner';
import Spinner32 from '@vkontakte/icons/dist/32/spinner';
import Spinner44 from '@vkontakte/icons/dist/44/spinner';
import Spinner16 from '@vkontakte/icons/dist/16/spinner';
import usePlatform from '../../hooks/usePlatform';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'regular' | 'large' | 'medium';
}

const svgSpinner = (size: SpinnerProps['size']): React.ReactElement => {
  switch (size) {
    case 'large':
      return <Spinner44 className="Spinner__self" />;
    case 'medium':
      return <Spinner32 className="Spinner__self" />;
    case 'small':
      return <Spinner16 className="Spinner__self" />;
    default:
      return <Spinner24 className="Spinner__self" />;
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
