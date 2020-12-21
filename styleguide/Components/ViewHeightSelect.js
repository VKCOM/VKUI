import React, { Fragment } from 'react';
import {
  MOBILE_LANDSCAPE_HEIGHT,
  MEDIUM_HEIGHT,
} from '../../src/components/AdaptivityProvider/AdaptivityProvider';

export const SMALL_HEIGHT = 667;

export const ViewHeightSelect = ({ onChange, value }) => (
  <Fragment>
    Высота окна:&nbsp;
    <select
      onChange={onChange}
      value={value}
    >
      <option value={MOBILE_LANDSCAPE_HEIGHT}>{MOBILE_LANDSCAPE_HEIGHT}px</option>
      <option value={SMALL_HEIGHT}>{SMALL_HEIGHT}px</option>
      <option value={MEDIUM_HEIGHT}>{MEDIUM_HEIGHT}px</option>
    </select>
  </Fragment>
)
