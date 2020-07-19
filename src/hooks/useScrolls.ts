import { useContext } from 'react';
import { ScrollsContext } from '../lib/ScrollContext';

export const useScrolls = () => {
  const { scrolls, setScroll } = useContext(ScrollsContext);

  return [scrolls, setScroll];
};
