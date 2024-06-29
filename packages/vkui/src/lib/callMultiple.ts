export const callMultiple =
  (...fns: any[]) =>
  (...args: any[]): void =>
    fns.filter((f) => typeof f === 'function').forEach((f) => f(...args));
