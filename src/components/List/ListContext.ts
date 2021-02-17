import { createContext } from 'react';
import { noop } from '../../lib/utils';

export const ListContext = createContext({
  toggleDrag: noop as (value: boolean) => void,
});
