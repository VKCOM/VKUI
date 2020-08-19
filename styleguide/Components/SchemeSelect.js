import React, { Fragment } from 'react';
import { Scheme } from '../../src/components/ConfigProvider/ConfigProviderContext';

const schemeOptions = [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
))

export const SchemeSelect = ({ onChange, value }) => (
  <Fragment>
    scheme:&nbsp;
    <select onChange={onChange} value={value}>
      {schemeOptions}
    </select>
  </Fragment>
)
