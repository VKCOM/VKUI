import * as React from 'react';
import { Link } from '@vkui';
import { Setting } from '../Setting/Setting';

const layouts = [{ title: 'Не задано', value: undefined }, 'card', 'plain'];

export const LayoutSelect = ({ onChange, value }) => {
  const onChangeValue = (changeValue) => {
    onChange(changeValue);
  };

  return (
    <Setting
      hint={
        <React.Fragment>
          Свойство <Link href="#/AppRoot">AppRoot</Link>
        </React.Fragment>
      }
      label="layout"
      onChange={onChangeValue}
      value={value}
      options={layouts}
    />
  );
};
