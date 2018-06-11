import './Checkbox.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import {platform, IOS} from '../../lib/platform';
import Icon16Done from '@vkontakte/icons/dist/16/done';

const osname = platform();
const baseClassName = getClassName('Checkbox');

const Checkbox = ({ children, className, ...restProps }) => {
  return (
    <Tappable
      component="label"
      className={classnames(baseClassName, className)}
      activeEffectDelay={osname === IOS ? 100 : ACTIVE_EFFECT_DELAY }
    >
      <input
        type="checkbox"
        className="Checkbox__input"
        {...restProps}
      />
      <div className="Checkbox__container">
        <div className="Checkbox__icon"><Icon16Done /></div>
        <div className="Checkbox__content">{children}</div>
      </div>
    </Tappable>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  description: PropTypes.node,
  className: PropTypes.string
};

export default Checkbox;
