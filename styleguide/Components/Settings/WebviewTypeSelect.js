import React from 'react';
import { Link, WebviewType } from '@vkui';
import { Setting } from '../Setting/Setting';

export const WebviewTypeSelect = ({ onChange, value }) => {
  React.useEffect(() => () => onChange(WebviewType.VKAPPS), []);

  return (
    <Setting
      hint={
        <React.Fragment>
          Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
        </React.Fragment>
      }
      label="webviewType"
      onChange={onChange}
      value={value}
      options={[WebviewType.INTERNAL, WebviewType.VKAPPS]}
    />
  );
};
