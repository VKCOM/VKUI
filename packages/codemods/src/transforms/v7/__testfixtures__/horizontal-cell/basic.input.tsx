import { HorizontalCell, Image } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <HorizontalCell
        header="Title"
        subtitle="Subtitle"
        extraSubtitle="Extra Subtitle"
        size="m"
      >
        <Image size={88} borderRadius="l" />
      </HorizontalCell>

      <HorizontalCell
        header={'Title'}
        subtitle="Subtitle"
        extraSubtitle="Extra Subtitle"
        size="m"
      >
        <Image size={88} borderRadius="l" />
      </HorizontalCell>
    </React.Fragment>
  );
};
