import React from 'react';
import { Setting } from '../Setting/Setting';

export const TokensSourceSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Источник токенов"
    options={[
      { value: 'appearance', title: 'appearance' },
      { value: 'vkui-tokens', title: 'vkui-tokens' },
    ]}
    onChange={onChange}
    value={value}
  >
  </Setting>
);
