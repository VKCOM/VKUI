import { HorizontalCellShowMore } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <HorizontalCellShowMore compensateLastCellIndent size="m" height={88} />
      <HorizontalCellShowMore compensateLastCellIndent={true} size="l" height={88} />
      <HorizontalCellShowMore compensateLastCellIndent={false} size="s" height={88} />
    </React.Fragment>
  );
};
