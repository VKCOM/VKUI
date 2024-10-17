import { Button, OnboardingTooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <OnboardingTooltip placement="right" header="Header" text="Привет">
        <Button style={{ margin: 20 }}>Наведи</Button>
      </OnboardingTooltip>
    </React.Fragment>
  );
};
