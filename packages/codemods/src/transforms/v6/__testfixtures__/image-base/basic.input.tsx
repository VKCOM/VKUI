import { Image, ImageBase, Avatar as VKUIAvatar } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <Image src="image.svg" withBorder></Image>
      <ImageBase withBorder={false} src="image.svg"></ImageBase>
      <VKUIAvatar withBorder={true} />
    </React.Fragment>
  );
};
