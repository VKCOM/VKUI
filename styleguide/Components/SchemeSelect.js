import React, { Fragment } from 'react';
import { Scheme } from '../../src/components/ConfigProvider/ConfigProviderContext';

const schemeOptions = [Scheme.BRIGHT_LIGHT, Scheme.SPACE_GRAY].map((schemeId) => (
  <option value={schemeId} key={schemeId}>{schemeId}</option>
))

export const SchemeSelect = ({ onChange, value, isVKCOM, ...restProps  }) => (
  <Fragment>
    scheme:&nbsp;
    <select onChange={onChange} value={value} {...restProps}>
      {isVKCOM ? [
        <option value={Scheme.VKCOM_LIGHT} key={Scheme.VKCOM_LIGHT}>{Scheme.VKCOM_LIGHT}</option>,
        <option value={Scheme.VKCOM_DARK} key={Scheme.VKCOM_DARK}>{Scheme.VKCOM_DARK}</option>
      ] : [
        <option value={Scheme.BRIGHT_LIGHT} key={Scheme.BRIGHT_LIGHT}>{Scheme.BRIGHT_LIGHT}</option>,
        <option value={Scheme.SPACE_GRAY} key={Scheme.SPACE_GRAY}>{Scheme.SPACE_GRAY}</option>
      ]}
    </select>
  </Fragment>
)
