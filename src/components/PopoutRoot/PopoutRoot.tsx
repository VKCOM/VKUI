import * as React from "react";
import { HasRootRef } from "../../types";
import { AppRootPortal } from "../AppRoot/AppRootPortal";
import { blurActiveElement, useDOM } from "../../lib/dom";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { classNames } from "../../lib/classNames";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
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
  const { sizeX } = useAdaptivity();

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [document, popout]);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "PopoutRoot",
        getSizeXClassName("PopoutRoot", sizeX)
      )}
      ref={getRootRef}
    >
      {children}
      <AppRootPortal>
        {!!popout && <div vkuiClass="PopoutRoot__popout">{popout}</div>}
        {!!modal && <div vkuiClass="PopoutRoot__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};
