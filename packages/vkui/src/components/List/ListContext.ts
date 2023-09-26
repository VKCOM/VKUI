import { createContext } from 'react';
import { noop } from '@vkontakte/vkjs';

export const ListContext = createContext({
  toggleDrag: noop as (value: boolean) => void,
});
