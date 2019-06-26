
import React from 'react';
import PropTypes from 'prop-types';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';

const baseClassName = getClassName('Radio');

const Radio = ({ children, description, style, className, getRef, getRootRef, ...restProps }) => {
  return (
    <Tappable
      component="label"
      style={style}
      className={classNames(baseClassName, className)}
      activeEffectDelay={IS_PLATFORM_IOS ? 100 : ACTIVE_EFFECT_DELAY }
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
  getRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  getRootRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default Radio;
