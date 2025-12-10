import type { SearchResultProps } from './types';

interface SearchState {
  data: SearchResultProps[];
  loading: boolean;
  error: string | null;
}

type SearchAction =
  | { type: 'reset' }
  | { type: 'loading' }
  | { type: 'success'; payload: SearchResultProps[] }
  | { type: 'error'; payload: string };

export const initialState: SearchState = {
  loading: false,
  error: null,
  data: [],
};

export const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case 'reset':
      return { ...initialState };
    case 'loading':
      return { ...state, error: null, loading: true };
    case 'success':
      return { ...initialState, data: action.payload };
    case 'error':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
