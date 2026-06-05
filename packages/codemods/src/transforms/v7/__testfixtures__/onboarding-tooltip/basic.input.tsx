import { Button, OnboardingTooltip } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <OnboardingTooltip placement="right" header="Header" text="Привет">
        <Button style={{ margin: 20 }}>Наведи</Button>
      </OnboardingTooltip>
    </React.Fragment>
  );
};
