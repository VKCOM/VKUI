import { useContext } from 'react';
import { NavPanelIdContext, NavViewIdContext } from './NavIdContext';

export const useNavId = () => ({
  view: useContext(NavViewIdContext),
  panel: useContext(NavPanelIdContext),
});
