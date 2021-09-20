import * as React from 'react';
import { noop } from '../../lib/utils';

export const ListContext = React.createContext({
  toggleDrag: noop as (value: boolean) => void,
});
