import { SimpleGrid } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <SimpleGrid
        columns={2}
        gap={[20, 10]}
        align="center"
      >
        <div/>
        <div/>
      </SimpleGrid>
      <SimpleGrid
        gap={[15, 20]}
        align="center"
      />
      <SimpleGrid
        gap={20}
        align="center"
      />
    </React.Fragment>
  );
};
