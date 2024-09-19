import { Typography } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const flag = false;
  const calculateUseAccentWeight = () => false;
  return (
    <React.Fragment>

      {/* должен добавить useAccentWeight */}
      <Typography />
      {/* должен оставить как есть*/}
      <Typography useAccentWeight />
      {/* должен убрать ={true} */}
      <Typography useAccentWeight={true} />
      {/* должен полностью убрать useAccentWeight так как false по умолчанию */}
      <Typography useAccentWeight={false} />
      {/* должен оставить как есть */}
      <Typography useAccentWeight={flag && calculateUseAccentWeight} />
    </React.Fragment>
  );
};
