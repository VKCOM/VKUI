import * as React from 'react';
import type { AnyFunction } from '@vkontakte/vkjs';
import type { PickOnlyFunctionProps } from '../types';

const isFunctionExistInProps = <Props extends Record<PropertyKey, any>>(
  props: Props,
  key: PropertyKey,
): key is Extract<keyof Props, AnyFunction> => typeof props[key] === 'function';

/**
 * Полезен, когда нужно сохранить пользовательские события.
 *
 * Приоритет даём пользовательскому событию. Например, можно будет отловить был ли вызван
 * `event.preventDefault()` через `event.defaultPrevented`.
 *
 * @private
 */
export const getMergedSameEventsByProps = <
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  MainProps extends React.ComponentProps<T>,
  OnlyFnPropsByMain extends PickOnlyFunctionProps<MainProps>,
>(
  mainProps: MainProps,
  secondProps: React.ComponentProps<T>,
) => {
  const result: {
    [K in keyof OnlyFnPropsByMain]?:
      | ((this: any, ...args: Parameters<OnlyFnPropsByMain[K]>) => void)
      | undefined;
  } = {};

  for (const eventName in mainProps) {
    if (
      mainProps.hasOwnProperty(eventName) &&
      secondProps.hasOwnProperty(eventName) &&
      isFunctionExistInProps(mainProps, eventName) &&
      isFunctionExistInProps(secondProps, eventName)
    ) {
      result[eventName] = function mergeSameEventsByProps(
        ...args: Parameters<OnlyFnPropsByMain[typeof eventName]>
      ) {
        secondProps[eventName].apply(this, args);
        mainProps[eventName].apply(this, args);
      };
    }
  }
  return result;
};
