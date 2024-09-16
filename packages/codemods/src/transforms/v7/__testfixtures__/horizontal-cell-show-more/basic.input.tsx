import { HorizontalCellShowMore, HorizontalScroll } from '@vkontakte/vkui';
import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  return (
    <React.Fragment>
      <HorizontalScroll inline>
        <div />
        <div />
        <div />
        <HorizontalCellShowMore onClick={() => {}} compensateLastCellIndent size="m" height={88} />
      </HorizontalScroll>
      <HorizontalScroll inline>
        <div />
        <div />
        <div />
        <HorizontalCellShowMore onClick={() => {}} compensateLastCellIndent={true} size="m" height={88} />
      </HorizontalScroll>
    </React.Fragment>
  );
};
