import * as React from 'react';
import { Link, Switch } from '@vkui';
import { Setting } from '../Setting/Setting';

export const HasPointerCheckbox = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="hasPointer"
    hint={
      <React.Fragment>
        Свойство <Link href="#/AdaptivityProvider">AdaptivityProvider</Link>
      </React.Fragment>
    }
  >
    <Switch
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      disabled={restProps.disabled}
    />
  </Setting>
);
