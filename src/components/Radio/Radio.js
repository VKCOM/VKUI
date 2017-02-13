import './Radio.css';
import React from 'react';
import { List, ListItem } from '../List/List';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';

const osname = platform();

export function RadioContainer(props) {
  return (
    <List>
      {props.children}
    </List>
  );
}

export function Radio(props) {
  const modifiers = {
    'Radio--ios': osname === IOS,
    'Radio--android': osname === ANDROID
  };

  return (
    <ListItem>
      <label className={classnames('Radio', modifiers)}>
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

