import './Radio.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Radio');

const Radio = ({ children, description, ...restProps }) => (
  <Tappable component="label" onClick={() => {}} className={baseClassNames}>
    <input
      type="radio"
      className="Radio__self"
      {...restProps}
    />
    <div className="Radio__wrapper">
      <div className="Radio__container">
        <span className="Radio__label">{children}</span>
        {description &&
        <div className="Radio__description">
          {description}
        </div>
        }
      </div>
      <span className="Radio__icon" />
    </div>
  </Tappable>
);

Radio.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node
};

export default Radio;
