type WarnOnceType = 'log' | 'warn' | 'error';
export type WarnOnceHandler = (message: string, type?: WarnOnceType) => void;

export function warnOnce(zone: string): WarnOnceHandler {
  const didWarn = new Set<string>();

  return (message: string, type: WarnOnceType = 'warn') => {
    if (!didWarn.has(message)) {
      didWarn.add(message);

      const formattedMessage = `%c[VKUI/${zone}] ${message}`;
      const styles = type === 'log' ? 'color: steelblue; font-style: italic' : undefined;

      console[type](formattedMessage, styles);
    }
  };
}
