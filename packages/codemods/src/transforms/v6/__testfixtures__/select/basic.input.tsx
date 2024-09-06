import { ChipsSelect, CustomSelect, Select as VKUISelect } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <VKUISelect fixDropdownWidth options={options} />
      <CustomSelect fixDropdownWidth={false} options={options} />
      <ChipsSelect fixDropdownWidth={true} options={options} />
    </React.Fragment>
  );
};
