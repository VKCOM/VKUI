import { Appearance, type AppearanceType, useAppearance } from '@vkontakte/vkui';
import React from 'react';

const Component: React.FC<{
  appearance: AppearanceType;
}> = ({ appearance }) => {
  return <div></div>;
};

export const App = () => {
  const _appearance: AppearanceType = Appearance.LIGHT;

  const _fromHookAppearance = useAppearance();

  return (
    <React.Fragment>
      <Component appearance={Appearance.DARK} />
    </React.Fragment>
  );
};
