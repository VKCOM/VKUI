import React, { Fragment } from 'react';

const schemeOptions = ["full", "embedded"].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
))

export const IntegrationSelect = ({ onChange, value }) => (
  <Fragment>
    integration:&nbsp;
    <select onChange={onChange} value={value}>
      {schemeOptions}
    </select>
  </Fragment>
)
