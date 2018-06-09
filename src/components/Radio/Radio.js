import './Radio.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import {platform, IOS} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Radio');

const Radio = ({ children, description, className, ...restProps }) => {
  return (
    <Tappable
      component="label"
      className={classnames(baseClassName, className)}
      activeEffectDelay={osname === IOS ? 100 : ACTIVE_EFFECT_DELAY }
      disabled={restProps.disabled}
    >
      <input
        type="radio"
        {...restProps}
      />
      <div className="Radio__container">
        <div className="Radio__icon" />
        <div className="Radio__content">
          {children}
          <div className="Radio__description">{description}</div>
        </div>
      </div>
    </Tappable>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string
};

export default Radio;
