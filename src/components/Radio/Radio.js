
import React from 'react';
import PropTypes from 'prop-types';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import {platform, IOS} from '../../lib/platform';

const osname = platform();
const baseClassName = getClassName('Radio');

const Radio = ({ children, description, style, className, getRef, getRootRef, ...restProps }) => {
  return (
    <Tappable
      component="label"
      style={style}
      className={classnames(baseClassName, className)}
      activeEffectDelay={osname === IOS ? 100 : ACTIVE_EFFECT_DELAY }
      disabled={restProps.disabled}
      getRootRef={getRootRef}
    >
      <input {...restProps} type="radio" className="Radio__input" ref={getRef} />
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
  style: PropTypes.object,
  className: PropTypes.string,
  getRef: PropTypes.func,
  getRootRef: PropTypes.func
};

export default Radio;
