import { useEffect } from "react";

export const useEffectDev: typeof useEffect = (effect, deps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      return effect();
    }
  }, deps);
};
