import { useCallback, useState } from 'react';

interface UseEnsuredControlProps<V, E extends React.ChangeEvent<any>> {
  value?: V;
  onChange?: (e: E) => any;
  defaultValue: V;
  disabled?: boolean | undefined;
}

export function useEnsuredControl<V, E extends React.ChangeEvent<any>>({
  onChange: onChangeProp,
  disabled,
  ...props
}: UseEnsuredControlProps<V, E>): [V | undefined, (e: E) => any] {
  const [value, onChangeValue] = useCustomEnsuredControl(props);

  const onChange = useCallback(
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

interface UseCustomEnsuredControlProps<V> {
  value?: V;
  onChange?: (v: V) => any;
  defaultValue: V;
  disabled?: boolean | undefined;
}

export function useCustomEnsuredControl<V>({
  disabled,
  onChange: onChangeProp,
  defaultValue,
  value,
}: UseCustomEnsuredControlProps<V>): [V | undefined, (e: V) => any] {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);

  const onChange = useCallback(
    (v: V) => {
      if (disabled) {
        return;
      }

      !isControlled && setLocalValue(v);
      onChangeProp && onChangeProp(v);
    },
    [disabled, isControlled, onChangeProp],
  );

  return [isControlled ? value : localValue, onChange];
}
