import React  from 'react';
import { WebviewType } from '@vkui';
import { Setting } from './Setting/Setting';

export const WebviewTypeSelect = ({ onChange, value }) => (
  <Setting
    label="Тип webview"
    value={value}
    onChange={onChange}
    options={[{
      title: WebviewType.VKAPPS,
      value: WebviewType.VKAPPS
    }, {
      title: WebviewType.INTERNAL,
      value: WebviewType.INTERNAL,
    }]}
  />
)
