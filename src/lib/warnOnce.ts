type WarnOnceType = 'log' | 'warn' | 'error';
export type WarnOnceHandler = (message: string, type?: WarnOnceType) => void;

export function warnOnce(zone: string): WarnOnceHandler {
  const didWarn: { [msg: string]: boolean } = {};

  return (message: string, type: WarnOnceType = 'warn') => {
    if (!didWarn[message]) {
      didWarn[message] = true;

      const formattedMessage = `%c[VKUI/${zone}] ${message}`;
      const styles = type === 'log' ? 'color: steelblue; font-style: italic' : undefined;

      console[type](formattedMessage, styles);
    }
  };
}
