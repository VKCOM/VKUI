import React, { Fragment } from 'react';
import { IOS, VKCOM, ANDROID } from '../../src/lib/platform';

export const PlatformSelect = ({ onChange, value }) => (
  <Fragment>
    platform:&nbsp;
    <select onChange={onChange} value={value}>
      <option value={IOS}>{IOS}</option>
      <option value={ANDROID}>{ANDROID}</option>
      <option value={VKCOM}>{VKCOM}</option>
    </select>
  </Fragment>
)
