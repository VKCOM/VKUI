export const callMultiple =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.filter((f) => typeof f === 'function').forEach((f) => f(...args));
