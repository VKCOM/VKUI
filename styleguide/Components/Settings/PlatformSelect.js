import * as React from 'react';
import { Link } from '@vkui';
import { Setting } from '../Setting/Setting';

const platforms = ['material', 'ios', 'vkcom'];

export const PlatformSelect = ({ onChange, value }) => {
  return (
    <Setting
      hint={
        <React.Fragment>
          Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
        </React.Fragment>
      }
      label="platform"
      onChange={onChange}
      value={value}
      options={platforms}
    />
  );
};
