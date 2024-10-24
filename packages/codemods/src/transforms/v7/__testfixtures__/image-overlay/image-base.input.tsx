import { ImageBase } from '@vkontakte/vkui';
import { Icon12Add } from '@vkontakte/vkui-icons';
import React from 'react';

const App = () => {
  const callback = () => {};
  return (
    <React.Fragment>
      {/* test 1: disableInteractive={true} -> remove disableInteractive and onClick */}
      <ImageBase
        src="avatar_url"
        alt="Приложение шторм онлайн"
      >
        <ImageBase.Overlay
          aria-label="Кнопка для изображения"
          disableInteractive={true}
          onClick={undefined}
        >
          <Icon12Add />
        </ImageBase.Overlay>
      </ImageBase>

      {/* test 2: disableInteractive -> remove disableInteractive and onClick */}
      <ImageBase
        src="avatar_url"
        alt="Приложение шторм онлайн"
      >
        <ImageBase.Overlay
          aria-label="Кнопка для изображения"
          disableInteractive
          onClick={undefined}
        >
          <Icon12Add />
        </ImageBase.Overlay>
      </ImageBase>

      {/* test 3: disableInteractive={false} and onClick with Identifier -> remove disableInteractive, don't remove onClick */}
      <ImageBase
        src="avatar_url"
        alt="Приложение шторм онлайн"
      >
        <ImageBase.Overlay
          aria-label="Кнопка для изображения"
          disableInteractive={false}
          onClick={callback}
        >
          <Icon12Add />
        </ImageBase.Overlay>
      </ImageBase>

      {/* test 4: disableInteractive={false} and onClick with ArrowFunction -> remove disableInteractive, don't remove onClick */}
      <ImageBase
        src="avatar_url"
        alt="Приложение шторм онлайн"
      >
        <ImageBase.Overlay
          aria-label="Кнопка для изображения"
          disableInteractive={false}
          onClick={() => callback()}
        >
          <Icon12Add />
        </ImageBase.Overlay>
      </ImageBase>
    </React.Fragment>
  );
};
