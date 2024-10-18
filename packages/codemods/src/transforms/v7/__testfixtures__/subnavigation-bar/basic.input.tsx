import { SubnavigationBar } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <SubnavigationBar mode={"overflow"} showArrows />

      <SubnavigationBar mode="overflow" showArrows />

      <SubnavigationBar mode={"fixed"} showArrows />

      <SubnavigationBar mode="fixed" showArrows />
    </React.Fragment>
  );
};
