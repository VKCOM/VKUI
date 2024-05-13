import * as React from 'react';
import { PROPS_HANDLERS, PROPS_OBSERVER } from './constants';
import type { ObservableProps, TargetProps } from './types';

export const useObservableProps = <T extends TargetProps>(props: T): ObservableProps<T> => {
  const [state] = React.useState(() => {
    (props as ObservableProps<T>)[PROPS_HANDLERS] = [];
    (props as ObservableProps<T>)[PROPS_OBSERVER] = function (handler) {
      this[PROPS_HANDLERS].push(handler);
      return () => {
        this[PROPS_HANDLERS] = this[PROPS_HANDLERS].filter((h) => h !== handler);
      };
    };
    return new Proxy(props as ObservableProps<T>, {
      set(target, prop, value, receiver) {
        const success = Reflect.set(target, prop, value, receiver);
        if (success) {
          target[PROPS_HANDLERS].forEach((handler) => handler(prop, value));
        }
        return success;
      },
    });
  });
  return state;
};
