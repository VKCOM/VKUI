import * as React from 'react';

const initialState = {
  error: undefined,
  data: undefined,
};

/**
 * @see https://usehooks-ts.com/react-hook/use-fetch
 */
export function useFetch(url: string | null, options?: RequestInit) {
  const cache = React.useRef<Record<string, unknown>>({});
  const cancelRequest = React.useRef(false);

  const fetchReducer = (
    state: unknown,
    action: { type: 'loading' | 'fetched' | 'error'; payload?: unknown },
  ) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (cancelRequest.current) {
          return;
        }

        dispatch({ type: 'error', payload: error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
}
