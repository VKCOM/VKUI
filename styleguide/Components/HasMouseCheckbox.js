import React  from 'react';
import { Setting } from './Setting/Setting';
import { Switch } from '@vkui';

export const HasMouseCheckbox = ({ onChange, value, ...restProps }) => (
  <Setting {...restProps} label="hasMouse">
    <Switch checked={value} onChange={onChange} disabled={restProps.disabled} />
  </Setting>
)
