import React from 'react';
import { Setting } from '../Setting/Setting';

export const TokensSourceSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Источник токенов"
    options={[
      { value: 'appereance', title: 'appereance' },
      { value: 'vkui-tokens', title: 'vkui-tokens' },
    ]}
    onChange={onChange}
    value={value}
  >
  </Setting>
);
