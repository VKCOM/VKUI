import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export const ListContext = React.createContext({
  toggleDrag: noop as (value: boolean) => void,
});
