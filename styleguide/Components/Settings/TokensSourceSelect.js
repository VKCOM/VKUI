import React from 'react';
import { Setting } from '../Setting/Setting';

export const TokensSourceSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Источник токенов"
    options={['appereance', 'vkBaseLight', 'paradigmBaseLight', 'paradigmBaseDark']}
    onChange={onChange}
    value={value}
  >
  </Setting>
);
