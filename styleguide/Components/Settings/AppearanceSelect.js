import React from 'react';
import { Appearance, Link } from '@vkui';
import { Setting } from '../Setting/Setting';

export const AppearanceSelect = ({ onChange, value, ...restProps }) => {
  return (
    <Setting
      {...restProps}
      hint={
        <React.Fragment>
          Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
        </React.Fragment>
      }
      label="appearance"
      options={[
        { value: Appearance.LIGHT, title: Appearance.LIGHT },
        { value: Appearance.DARK, title: Appearance.DARK },
      ]}
      onChange={onChange}
      value={value}
    />
  );
};
