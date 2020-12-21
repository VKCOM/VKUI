import React, { Fragment } from 'react';
import { Scheme } from '../../src/components/ConfigProvider/ConfigProviderContext';

const schemeOptions = [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
))

export const SchemeSelect = ({ onChange, value, ...restProps  }) => (
  <Fragment>
    scheme:&nbsp;
    <select onChange={onChange} value={value} {...restProps}>
      <option value={Scheme.BRIGHT_LIGHT} key={Scheme.BRIGHT_LIGHT}>{Scheme.BRIGHT_LIGHT}</option>
      <option value={Scheme.SPACE_GRAY} key={Scheme.SPACE_GRAY}>{Scheme.SPACE_GRAY}</option>
    </select>
  </Fragment>
)
