import { Appearance as AppearanceAlias, type AppearanceType as AppearanceTypeAlias } from '@vkontakte/vkui';
import React from 'react';

const Component: React.FC<{
  appearance: AppearanceTypeAlias;
}> = () => {
  return (
    <div></div>
  )
}

const App = () => {
  const appearance: AppearanceTypeAlias = AppearanceAlias.LIGHT;

  return (
    <React.Fragment>
      <Component appearance={AppearanceAlias.DARK} />
    </React.Fragment>
  );
};
