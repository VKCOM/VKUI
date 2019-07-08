import React from 'react';
import PropTypes from 'prop-types';
import Spinner24 from '@vkontakte/icons/dist/24/spinner';
import Spinner32 from '@vkontakte/icons/dist/32/spinner';
import Spinner44 from '@vkontakte/icons/dist/44/spinner';
import Spinner16 from '@vkontakte/icons/dist/16/spinner';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasStyleObject } from '../../types/props';

const baseClassNames = getClassName('Spinner');

export type SpinnerSize = 'small' | 'regular' | 'large' | 'medium';

const svgSpinner = (size: SpinnerSize) => {
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

export interface SpinnerProps extends HasStyleObject {
  size?: SpinnerSize;
}

// eslint-disable-next-line react/display-name
const Spinner = ({ className, size, ...restProps }: SpinnerProps) => (
  <div {...restProps} className={classNames(baseClassNames, className)}>
    {svgSpinner(size)}
  </div>
);

Spinner.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'regular', 'large', 'medium']),
  className: PropTypes.string
};

Spinner.defaultProps = {
  size: 'regular'
};

export default React.memo(Spinner);
