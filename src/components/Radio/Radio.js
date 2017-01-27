import './Radio.css';
import React from 'react';
import { List, ListItem } from '../List/List';
import removeObjectKeys from '../../lib/removeObjectKeys';

export function RadioContainer(props) {
  return (
    <List>
      {props.children}
    </List>
  );
}

export function Radio(props) {
  return (
    <ListItem>
      <label className="Radio">
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

