import React, { Fragment } from 'react';
import { SizeType } from '../../src/hoc/withAdaptivity';

export const SizeYSelect = ({ onChange, value }) => (
  <Fragment>
    SizeY:&nbsp;
    <select onChange={onChange} value={value}>
      <option value={SizeType.REGULAR}>{SizeType.REGULAR}</option>
      <option value={SizeType.COMPACT}>{SizeType.COMPACT}</option>
    </select>
  </Fragment>
)
