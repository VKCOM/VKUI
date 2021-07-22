import React from 'react';
import { Scheme } from '@vkui';
import { Setting } from '../Setting/Setting';

export const SchemeSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Тема"
    options={[
      { value: Scheme.BRIGHT_LIGHT, title: Scheme.BRIGHT_LIGHT },
      { value: Scheme.SPACE_GRAY, title: Scheme.SPACE_GRAY },
    ]}
    onChange={onChange}
    value={value}
  >
  </Setting>
);
