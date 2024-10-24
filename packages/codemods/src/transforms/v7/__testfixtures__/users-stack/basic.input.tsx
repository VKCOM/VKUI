import { UsersStack } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* direction="row" -> avatarsPosition="start" */}
      <UsersStack
        photos={[]}
        direction="row"
        size="s"
      >
        Иван и ещё 2 ваших друга подписаны
      </UsersStack>

      {/* direction="row-reverse" -> avatarsPosition="end" */}
      <UsersStack
        photos={[]}
        direction={"row-reverse"}
        size="m"
      >
        Иван и ещё 2 ваших друга подписаны
      </UsersStack>

      {/* direction="column" -> avatarsPosition="top" */}
      <UsersStack
        photos={[]}
        direction="column"
        size="l"
      >
        Иван и ещё 2 ваших друга подписаны
      </UsersStack>

      {/* do nothing */}
      <UsersStack
        photos={[]}
        size="s"
      >
        Иван и ещё 2 ваших друга подписаны
      </UsersStack>
    </React.Fragment>
  );
};
