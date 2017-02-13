import './Radio.css';
import React from 'react';
import { List, ListItem } from '../List/List';
import removeObjectKeys from '../../lib/removeObjectKeys';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';
import TappableWrapper from '../TappableWrapper/TappableWrapper';

const osname = platform();
const noop = () => {};

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
    <ListItem onClick={noop}>
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

