import * as React from "react";
import { HasRootRef } from "../../types";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import "./PopoutRoot.css";

export interface PopoutRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps,
    HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRootComponent = ({
  popout,
  modal,
  viewWidth,
  viewHeight,
  hasMouse,
  children,
  getRootRef,
  ...restProps
}: PopoutRootProps & AdaptivityContextInterface) => {
  const { document } = useDOM();

  const isDesktop = useAdaptivityIsDesktop();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <div {...restProps} vkuiClass="PopoutRoot" ref={getRootRef}>
      {children}
      <AppRootPortal>
        {!!popout && (
          <div
            vkuiClass={
              isDesktop ? "PopoutRoot--absolute" : "PopoutRoot__popout"
            }
          >
            {popout}
          </div>
        )}
        {!!modal && <div vkuiClass="PopoutRoot__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};

PopoutRootComponent.displayName = "PopoutRoot";

export const PopoutRoot = withAdaptivity(PopoutRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
