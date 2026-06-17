export const createStore = <T>(initialState: T) => {
  let state = initialState;
  const subscribers = new Set<(nextState: T) => void>();

  return {
    getState: () => state,
    setState: (updater: T | ((currentState: T) => T)) => {
      const nextState =
        typeof updater === 'function' ? (updater as (currentState: T) => T)(state) : updater;

      state = nextState;
      subscribers.forEach((subscriber) => subscriber(nextState));
    },
    subscribe: (callback: (nextState: T) => void) => {
      subscribers.add(callback);

      return () => {
        subscribers.delete(callback);
      };
    },
  };
};

export type Store<T> = ReturnType<typeof createStore<T>>;
