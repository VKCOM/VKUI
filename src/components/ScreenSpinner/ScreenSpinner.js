import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('ScreenSpinner');

export default function ScreenSpinner ({ style, className, ...restProps }) {
  return (
    <PopoutWrapper className={classnames(baseClassName, className)} style={style}>
      <Spinner {...restProps} />
    </PopoutWrapper>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ScreenSpinner.defaultProps = {};
