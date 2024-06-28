import * as React from 'react';
import { NavPanelIdContext, NavViewIdContext } from './NavIdContext';

export const useNavId = (): {
  view: string | undefined;
  panel: string | undefined;
} => ({
  view: React.useContext(NavViewIdContext),
  panel: React.useContext(NavPanelIdContext),
});
