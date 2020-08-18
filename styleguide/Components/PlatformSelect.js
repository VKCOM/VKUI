import React, { Fragment } from 'react';
import { OS } from '../../src/lib/platform';

export const PlatformSelect = ({ onChange, value }) => (
  <Fragment>
    platform:&nbsp;
    <select onChange={onChange} value={value}>
      <option value={OS.IOS}>{OS.IOS}</option>
      <option value={OS.ANDROID}>{OS.ANDROID}</option>
    </select>
  </Fragment>
)
