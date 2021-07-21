import React from 'react';
import { Setting } from '../Setting/Setting';
import { Switch } from '@vkui';

export const HasMouseCheckbox = ({ onChange, value, ...restProps }) => (
  <Setting {...restProps} label="hasMouse">
    <Switch checked={value} onChange={(e) => onChange(e.target.checked)} disabled={restProps.disabled} />
  </Setting>
);
