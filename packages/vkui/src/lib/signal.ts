export type Signal<T = void> = {
  dispatch: (value: T) => void;
  subscribe: (handleFn: (value: T) => void) => () => void;
};

export function createSignal<T = void>() {
  const subscribers: Array<(value: T) => void> = [];
  return {
    dispatch: (value: T) => {
      subscribers.forEach((handleFn) => handleFn(value));
    },
    subscribe: (handleFn: (value: T) => void) => {
      subscribers.push(handleFn);
      return () => {
        const index = subscribers.indexOf(handleFn);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    },
  };
}
