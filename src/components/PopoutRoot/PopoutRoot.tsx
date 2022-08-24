import * as React from "react";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import "./PopoutRoot.css";

export interface PopoutRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRoot = ({
  popout,
  modal,
  children,
  getRootRef,
  ...restProps
}: PopoutRootProps) => {
  const { document } = useDOM();

  const { isDesktop } = useAdaptivityWithMediaQueries();

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
