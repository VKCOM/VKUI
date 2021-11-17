import * as React from 'react';

export function useEnsuredControl<V, E>(
  props: { value?: V; onChange?: (e: E) => any },
  options: { defaultValue: V },
): [V, (e: E) => any] {
  const isControlled = props.hasOwnProperty('value');
  const [localValue, setLocalValue] = React.useState(options.defaultValue);
  const onChange = React.useCallback((e) => {
    !isControlled && setLocalValue(e.target.value);
    props.onChange && props.onChange(e);
  }, [props.onChange]);
  return [isControlled ? props.value : localValue, onChange];
}
