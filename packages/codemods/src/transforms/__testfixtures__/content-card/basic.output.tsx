import { ContentCard } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ContentCard {...rest} headerComponent="h4"></ContentCard>
      <ContentCard headerComponent="h4"></ContentCard>
    </React.Fragment>
  );
};
