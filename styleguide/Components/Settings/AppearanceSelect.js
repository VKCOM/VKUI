import * as React from 'react';
import { Link } from '@vkui';
import { Setting } from '../Setting/Setting';

export const AppearanceSelect = ({ onChange, value, options, ...restProps }) => {
  return (
    <Setting
      {...restProps}
      hint={
        <React.Fragment>
          Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
        </React.Fragment>
      }
      label="appearance"
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};
