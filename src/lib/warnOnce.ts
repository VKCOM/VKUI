export type WarnOnceHandler = (
  message: string,
  type?: "warn" | "error"
) => void;

export function warnOnce(zone: string): WarnOnceHandler {
  const didWarn: { [msg: string]: boolean } = {};

  return (message: string, type: "warn" | "error" = "warn") => {
    if (!didWarn[message]) {
      console[type](`[VKUI/${zone}] ${message}`);
      didWarn[message] = true;
    }
  };
}
