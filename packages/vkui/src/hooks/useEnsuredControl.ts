import * as React from 'react';
import { isFunction } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../lib/warnOnce';

export interface UseEnsuredControlProps<V, E extends React.ChangeEvent<any>> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?: (this: void, e: E) => any;
}

export function useEnsuredControl<V, E extends React.ChangeEvent<any>>({
  onChange: onChangeProp,
  disabled,
  ...props
}: UseEnsuredControlProps<V, E>): [V, (e: E) => any] {
  const [value, onChangeValue] = useCustomEnsuredControl(props);

  const onChange = React.useCallback(
    (e: E) => {
      if (disabled) {
        return;
      }

      onChangeValue(e.target.value);
      onChangeProp && onChangeProp(e);
    },
    [onChangeValue, onChangeProp, disabled],
  );

  return [value, onChange];
}

export interface UseCustomEnsuredControlProps<V> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?: (this: void, v: V) => any;
}

const warn = warnOnce('useCustomEnsuredControl');

export function useCustomEnsuredControl<V = any>({
  value,
  defaultValue,
  disabled,
  onChange: onChangeProp,
}: UseCustomEnsuredControlProps<V>): [V, React.Dispatch<React.SetStateAction<V>>] {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = React.useState(defaultValue);

  const preservedControlledValueRef = React.useRef<V | undefined>(undefined);
  useIsomorphicLayoutEffect(() => {
    preservedControlledValueRef.current = value;
  });

  const onChange = React.useCallback(
    (nextValue: React.SetStateAction<V>) => {
      if (disabled) {
        return;
      }

      if (isFunction(nextValue)) {
        if (!isControlled) {
          setLocalValue((prevValue) => {
            const resolvedValue = nextValue(prevValue);
            if (onChangeProp) {
              onChangeProp(resolvedValue);
            }
            return resolvedValue;
          });
        } else if (onChangeProp) {
          if (process.env.NODE_ENV === 'development') {
            if (preservedControlledValueRef.current === undefined) {
              warn(
                `A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`,
                'error',
              );
            }
          }

          if (preservedControlledValueRef.current !== undefined) {
            const resolvedValue = nextValue(preservedControlledValueRef.current);
            onChangeProp(resolvedValue);
          }
        }
      } else {
        if (onChangeProp) {
          onChangeProp(nextValue);
        }
        if (!isControlled) {
          setLocalValue(nextValue);
        }
      }
    },
    [disabled, isControlled, onChangeProp],
  );

  return [isControlled ? value : localValue, onChange];
}
