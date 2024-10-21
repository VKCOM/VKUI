import { ContentCard } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ContentCard
        subtitle="VKUI"
        header="ContentCard example"
        caption="VKUI Styleguide > Blocks > ContentCard"
      />
      <ContentCard
        subtitle={"VKUI"}
        header="ContentCard example"
        caption="VKUI Styleguide > Blocks > ContentCard"
      />
    </React.Fragment>
  );
};
