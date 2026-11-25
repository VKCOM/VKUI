import { createContext, useContext } from 'react';

interface OverviewLayoutContextData {
  searchedQuery: string;
}

export const OverviewLayoutContext = createContext<OverviewLayoutContextData>({
  searchedQuery: '',
});

export const useOverviewLayoutContext = () => useContext(OverviewLayoutContext);
