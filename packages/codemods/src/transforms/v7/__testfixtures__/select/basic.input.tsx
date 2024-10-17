import { Select } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const [selectType, setSelectType] = React.useState(undefined);
  const selectTypes = [
    {
      label: 'default',
      value: 'default',
    },
    {
      label: 'plain',
      value: 'plain',
    },
    {
      label: 'accent',
      value: 'accent',
    },
  ];

  return (
    <React.Fragment>
      <Select
        id="select-type-select-id"
        value={selectType}
        placeholder="Не задан"
        options={selectTypes}
        autoHideScrollbar
        autoHideScrollbarDelay={12312}
        onChange={(e) => setSelectType(e.target.value)}
      />
    </React.Fragment>
  );
};
