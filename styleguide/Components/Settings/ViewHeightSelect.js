import React from 'react';
import { BREAKPOINTS } from '@vkui/lib/adaptivity';
import { Setting } from '../Setting/Setting';

export const SMALL_HEIGHT = 667;

export const ViewHeightSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Высота окна"
    onChange={onChange}
    value={value}
    options={[BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT, SMALL_HEIGHT, BREAKPOINTS.MEDIUM_HEIGHT]}
  />
);
