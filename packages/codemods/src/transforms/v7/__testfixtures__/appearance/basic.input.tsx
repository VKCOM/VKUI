import { Appearance, type AppearanceType } from '@vkontakte/vkui';
import React from 'react';

const Component: React.FC<{
  appearance: AppearanceType;
}> = ({
  appearance,
}) => {
  return (
    <div></div>
  )
}

const App = () => {
  const appearance: AppearanceType = Appearance.LIGHT;

  return (
    <React.Fragment>
      <Component appearance={Appearance.DARK} />
    </React.Fragment>
  );
};
