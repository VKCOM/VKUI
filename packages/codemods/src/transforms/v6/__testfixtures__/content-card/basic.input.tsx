import { ContentCard } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <ContentCard {...rest}></ContentCard>
      <ContentCard></ContentCard>
    </React.Fragment>
  );
};
