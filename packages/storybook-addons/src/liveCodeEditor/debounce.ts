export interface DebouncedFunction<T extends unknown[]> {
  (...args: T): void;
  cancel: () => void;
}

export function debounce<T extends unknown[]>(
  fn: (...args: T) => unknown,
  delay: number,
): DebouncedFunction<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let args: T | undefined;

  const later = () => fn(...(args as T));

  const debouncedFn = (...a: T) => {
    args = a;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };

  debouncedFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFn;
}
