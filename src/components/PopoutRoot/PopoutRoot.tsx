import * as React from "react";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import "./PopoutRoot.css";

export interface PopoutRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRoot: React.FC<PopoutRootProps> = ({
  popout,
  modal,
  children,
  getRootRef,
  ...restProps
}) => {
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
