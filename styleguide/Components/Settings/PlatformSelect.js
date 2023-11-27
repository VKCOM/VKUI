import * as React from 'react';
import { Link } from '@vkui';
import { Setting } from '../Setting/Setting';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';

const more = '···';

const platforms = ['android', 'ios', 'vkcom', more];

export const PlatformSelect = ({ onChange, value }) => {
  const { setActiveModal } = React.useContext(StyleGuideContext);

  const onChangeValue = (changeValue) => {
    if (changeValue === more) {
      setActiveModal('platforms');
      return;
    }

    onChange(changeValue);
  };

  return (
    <Setting
      hint={
        <React.Fragment>
          Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
        </React.Fragment>
      }
      label="platform"
      onChange={onChangeValue}
      value={value}
      options={platforms}
    />
  );
};
