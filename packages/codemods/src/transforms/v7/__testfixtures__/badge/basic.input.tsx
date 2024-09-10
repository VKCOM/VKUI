import { Badge } from '@vkontakte/vkui';
import type {BadgeProps} from '@vkontakte/vkui';
import React from 'react';

type Props = {
  badge: BadgeProps,
};

const App = () => {
  return (
    <React.Fragment>
      <Badge />
      <Badge>Badge</Badge>
    </React.Fragment>
  );
};
