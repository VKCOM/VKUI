import { Avatar, RichCell } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const text = "Text"
  return (
    <React.Fragment>
      <RichCell
        before={<Avatar size={72} src="" />}
        subhead="Subhead"
        text="Text"
        caption="Caption"
        after="After"
        afterCaption="After Caption"
      >
        Children
      </RichCell>

      <RichCell
        before={<Avatar size={72} src="" />}
        subhead={"Subhead"}
        text={text}
        caption={"Caption"}
        after="After"
        afterCaption="After Caption"
      >
        Children
      </RichCell>
    </React.Fragment>
  );
};
