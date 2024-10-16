import { ContentCard } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <ContentCard
        subtitle="VKUI"
        header="ContentCard example"
        caption="VKUI Styleguide > Blocks > ContentCard"
        text="Badlands is the story about dreams and cruel reality..."
        headerComponent="h4"
      />
      <ContentCard
        subtitle={"VKUI"}
        header={"ContentCard example"}
        caption={"VKUI Styleguide > Blocks > ContentCard"}
        text={"Badlands is the story about dreams and cruel reality..."}
        headerComponent="h4"
      />
    </React.Fragment>
  );
};
