import * as React from "react";
import { useDOM } from "../lib/dom";
import { Platform, platformName } from "../lib/platform";

type Orientation = "portrait" | "landscape";

/**
 * Возвращает текущую ориентация экрана на человеском языке.
 * Учитывает особенности API на разных платформах.
 */
function getOrientation(window: Window | undefined): Orientation {
  if (typeof window === "undefined") {
    return "portrait";
  }

  if (
    window.screen &&
    window.screen.orientation &&
    window.screen.orientation.angle
  ) {
    return Math.abs(window.screen.orientation.angle) === 90
      ? "landscape"
      : "portrait";
  }

  // Support IOS safari
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90
      ? "landscape"
      : "portrait";
  }

  return "portrait";
}

export function useOrientationChange(): Orientation {
  const { window } = useDOM();

  const [orientation, setOrientation] = React.useState(() =>
    getOrientation(window)
  );

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleOrientationChange = () =>
      setOrientation(getOrientation(window));

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [window]);

  return orientation;
}

function useNoopOrientationChange(): Orientation {
  return "portrait";
}

/**
 * Подписываемся на изменение только для мобильных устройств.
 */
export const useIsomorphicOrientationChange =
  platformName === Platform.IOS || platformName === Platform.ANDROID
    ? useOrientationChange
    : useNoopOrientationChange;
