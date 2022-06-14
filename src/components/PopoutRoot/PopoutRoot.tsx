import * as React from "react";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { classNames } from "../../lib/classNames";
import { getViewWidthClassName } from "../../helpers/getViewWidthClassName";
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
  const { viewWidth } = useAdaptivity();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "PopoutRoot",
        getViewWidthClassName("PopoutRoot", viewWidth)
      )}
      ref={getRootRef}
    >
      {children}
      <AppRootPortal>
        {!!popout && (
          <div
            vkuiClass="PopoutRoot__popout"
            // vkuiClass={
            //   isDesktop ? "PopoutRoot--absolute" : "PopoutRoot__popout"
            // }
          >
            {popout}
          </div>
        )}
        {!!modal && <div vkuiClass="PopoutRoot__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};
