import React, { Fragment } from 'react';
import { IOS, VKCOM, ANDROID } from '@vkui';
import { Setting } from './Setting/Setting';

export const PlatformSelect = ({ onChange, value }) => (
  <Setting label="Платформа" onChange={onChange} value={value} options={[IOS, ANDROID, VKCOM]} />
)
