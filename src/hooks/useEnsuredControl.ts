import * as React from "react";

export function useEnsuredControl<V, E extends React.ChangeEvent<any>>(
  props: { value?: V; onChange?: (e: E) => any },
  options: { defaultValue: V }
): [V | undefined, (e: E) => any] {
  const isControlled = props.hasOwnProperty("value");
  const [localValue, setLocalValue] = React.useState(options.defaultValue);
  const onChange = React.useCallback(
    (e: E) => {
      !isControlled && setLocalValue(e.target.value);
      props.onChange && props.onChange(e);
    },
    [isControlled, props]
  );
  return [isControlled ? props.value : localValue, onChange];
}
