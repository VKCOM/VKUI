import React, { Fragment } from 'react';
import {
  MEDIUM_HEIGHT,
} from '../../src/components/AdaptivityProvider/AdaptivityProvider';

export const COMPACT_HEIGHT = 667;

export const ViewHeightSelect = ({ onChange, value }) => (
  <Fragment>
    Высота окна:&nbsp;
    <select
      onChange={onChange}
      value={value}
    >
      <option value={COMPACT_HEIGHT}>{COMPACT_HEIGHT}px</option>
      <option value={MEDIUM_HEIGHT}>{MEDIUM_HEIGHT}px</option>
    </select>
  </Fragment>
)
