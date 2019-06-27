import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('ScreenSpinner');

export default function ScreenSpinner ({ style, className, ...restProps }) {
  return (
    <PopoutWrapper className={classNames(baseClassName, className)} style={style}>
      <div className="ScreenSpinner__container">
        <Spinner size="large" {...restProps} />
      </div>
    </PopoutWrapper>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

ScreenSpinner.defaultProps = {};
