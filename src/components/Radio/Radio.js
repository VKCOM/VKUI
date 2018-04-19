import './Radio.css';
import './RadioNew.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const Radio = ({ v, children, description, className, ...restProps }) => {
  const name = v === 'new' ? 'RadioNew' : 'Radio';

  return (
    <Tappable component="label" onClick={() => {}} className={classnames(getClassName(name), className)}>
      <input
        type="radio"
        className={`${name}__self`}
        {...restProps}
      />
      <div className={`${name}__wrapper`}>
        {v === 'new' && <div className={`${name}__icon`} />}
        <div className={`${name}__container`}>
          {children}
          <div className={`${name}__description`}>{description}</div>
        </div>
        {v === 'old' && <div className={`${name}__icon`} />}
      </div>
    </Tappable>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string,
  v: PropTypes.oneOf(['new', 'old'])
};

Radio.defaultProps = {
  v: 'old'
};

export default Radio;
