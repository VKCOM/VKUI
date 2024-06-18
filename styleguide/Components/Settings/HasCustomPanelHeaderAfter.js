import * as React from 'react';
import { Checkbox, Link } from '@vkui';
import { Setting } from '../Setting/Setting';

export const HasCustomPanelHeaderAfter = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="hasCustomPanelHeaderAfter"
    hint={
      <React.Fragment>
        Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
      </React.Fragment>
    }
  >
    <Checkbox
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
      disabled={restProps.disabled}
    />
  </Setting>
);
