import './Radio.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Radio');

export default function Radio (props) {
  return (
    <Tappable component="label" onClick={() => {}} className={baseClassNames}>
      <input
        {...removeObjectKeys(props, ['children'])}
        type="radio"
        className="Radio__self"
      />
      <span className="Radio__label">{props.children}</span>
      <span className="Radio__icon" />
    </Tappable>
  );
}

Radio.propTypes = {
  children: PropTypes.node
};
