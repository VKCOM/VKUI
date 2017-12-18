import './ScreenSpinner.css';

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';

const baseClassNames = getClassName('ScreenSpinner');

export default function ScreenSpinner (props) {
  return (
    <PopoutWrapper onClick={props.onClick}>
      <div
        className={classnames(baseClassNames, props.className)}
        {...removeObjectKeys(props, ['className', 'onClick'])}
      >
        <Spinner color="#fff" />
      </div>
    </PopoutWrapper>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};
