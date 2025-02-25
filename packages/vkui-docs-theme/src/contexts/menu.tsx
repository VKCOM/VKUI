'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

interface Menu {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = React.createContext<Menu>({
  menu: false,
  setMenu: noop,
});

export const useMenu = () => React.useContext(MenuContext);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = React.useState(false);

  const value = React.useMemo(() => ({ menu, setMenu }), [menu]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
