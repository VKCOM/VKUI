import * as React from "react";
import { hasMouse as _hasMouse } from "@vkontakte/vkjs";
import {
  AdaptivityContext,
  type AdaptivityProps,
} from "../components/AdaptivityProvider/AdaptivityContext";

export type { AdaptivityProps };

export const useAdaptivity = (): AdaptivityProps => {
  const { hasMouse: hasMouseContext, ...adaptivity } =
    React.useContext(AdaptivityContext);
  const [hasMouse, setHasMouse] = React.useState(hasMouseContext);

  // определение hasMouse в @vkontakte/vkjs происходит через window.matchMedia
  // чтобы не было ошибок при гидрации определяем значение после первого рендера
  React.useEffect(() => {
    if (hasMouseContext !== undefined) {
      setHasMouse(hasMouseContext);
    } else {
      setHasMouse(_hasMouse);
    }
  }, [hasMouseContext]);

  return { hasMouse, ...adaptivity };
};
