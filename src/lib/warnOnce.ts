export function warnOnce() {
  const didWarn: { [msg: string]: boolean } = {};
  return (message: string) => {
    if (!didWarn[message]) {
      console.error(message);
      didWarn[message] = true;
    }
  };
}
