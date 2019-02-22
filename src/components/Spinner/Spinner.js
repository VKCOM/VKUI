import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames.js';
import Spinner24 from '@vkontakte/icons/dist/24/spinner';
import Spinner32 from '@vkontakte/icons/dist/32/spinner';
import Spinner44 from '@vkontakte/icons/dist/44/spinner';
import Spinner16 from '@vkontakte/icons/dist/16/spinner';

const baseClassNames = getClassName('Spinner');

const svgSpinner = size => {
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

const Spinner = React.memo(({ className, size, ...restProps }) => (
  <div {...restProps} className={classNames(baseClassNames, className)}>
    {svgSpinner(size)}
  </div>
));

Spinner.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'regular', 'large', 'medium']),
  className: PropTypes.string
};

Spinner.defaultProps = {
  size: 'regular'
};

export default Spinner;
