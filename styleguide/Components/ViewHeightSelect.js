import React, { Fragment } from 'react';
import {
  REGULAR_HEIGHT,
} from '../../src/components/AdaptivityProvider/AdaptivityProvider';

const COMPACT_HEIGHT = 500;

export const ViewHeightSelect = ({ onChange, value }) => (
  <Fragment>
    Высота окна:&nbsp;
    <select
      onChange={onChange}
      value={value}
    >
      <option value={COMPACT_HEIGHT}>{COMPACT_HEIGHT}px</option>
      <option value={REGULAR_HEIGHT}>{REGULAR_HEIGHT}px</option>
    </select>
  </Fragment>
)
