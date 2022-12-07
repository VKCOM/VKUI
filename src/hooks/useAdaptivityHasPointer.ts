import * as React from "react";
import { hasMouse as hasPointerLib } from "@vkontakte/vkjs";
import { AdaptivityContext } from "../components/AdaptivityProvider/AdaptivityContext";

/**
 * Определение происходит с помощью `window.matchMedia`. Для того чтобы не было ошибок при гидратации, по умолчанию
 * откладываем определение на второй рендер.
 *
 * [No SSR] Если передать `false`, то определение будет сразу.
 */
export function useAdaptivityHasPointer(deferDetect?: true): undefined | boolean; // prettier-ignore
export function useAdaptivityHasPointer(deferDetect?: false): boolean;
export function useAdaptivityHasPointer(
  deferDetect = true
): undefined | boolean {
  const { hasPointer: hasPointerContext } = React.useContext(AdaptivityContext);
  const [hasPointer, setHasPointer] = React.useState(() =>
    !deferDetect && hasPointerContext === undefined
      ? hasPointerLib
      : hasPointerContext
  );

  React.useEffect(() => {
    setHasPointer((prevHasPointer) => {
      const newHasHover =
        hasPointerContext === undefined ? hasPointerLib : hasPointerContext;
      return prevHasPointer === newHasHover ? prevHasPointer : newHasHover;
    });
  }, [hasPointerContext]);

  return hasPointer;
}
