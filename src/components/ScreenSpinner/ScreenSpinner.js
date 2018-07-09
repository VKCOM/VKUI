import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';

export default function ScreenSpinner ({ style, className, ...restProps }) {
  return (
    <PopoutWrapper className={className} style={style}>
      <Spinner {...restProps} />
    </PopoutWrapper>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string
};

ScreenSpinner.defaultProps = {
  color: '#fff'
};
