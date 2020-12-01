import React, { Fragment } from 'react';

export const HasMouseCheckbox = ({ onChange, value, ...restProps }) => (
  <Fragment>
    <label>
      Has Mouse:&nbsp;
      <input type="checkbox" checked={value} onChange={onChange} {...restProps} />
    </label>
  </Fragment>
)
