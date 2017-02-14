import './Radio.css';
import React from 'react';
import ListItem from '../ListItem/ListItem';
import removeObjectKeys from '../../lib/removeObjectKeys';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Radio');

export default function Radio(props) {
  return (
    <ListItem>
      <label className={baseClassNames}>
        <input
          {...removeObjectKeys(props, ['children'])}
          type="radio"
          className="Radio__self"
        />
        <span className="Radio__label">{props.children}</span>
        <span className="Radio__icon" />
      </label>
    </ListItem>
  );
}

