import { Flex } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Flex
        direction="column"
        gap={[20, 10]}
        align="center"
      >
        <div/>
        <div/>
      </Flex>
      <Flex
        direction="column"
        gap={[15, 20]}
        align="center"
      />
      <Flex
        direction="column"
        gap={20}
        align="center"
      />
    </React.Fragment>
  );
};
