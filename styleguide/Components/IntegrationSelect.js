import React, { Fragment } from 'react';

const schemeOptions = ["full", "embeded"].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
))

export const IntegrationSelect = ({ onChange, value }) => (
  <Fragment>
    vkui integration:&nbsp;
    <select onChange={onChange} value={value}>
      {schemeOptions}
    </select>
  </Fragment>
)
