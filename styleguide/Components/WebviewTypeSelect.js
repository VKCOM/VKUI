import React, { Fragment } from 'react';
import { WebviewType } from '../../src/components/ConfigProvider/ConfigProviderContext';

export const WebviewTypeSelect = ({ onChange, value }) => (
  <Fragment>
    webviewType:&nbsp;
    <select onChange={onChange} value={value}>
      <option value={WebviewType.VKAPPS}>{WebviewType.VKAPPS}</option>
      <option value={WebviewType.INTERNAL}>{WebviewType.INTERNAL}</option>
    </select>
  </Fragment>
)
