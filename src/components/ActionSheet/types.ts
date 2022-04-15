import * as React from "react";
import { FocusTrapProps } from "../FocusTrap/FocusTrap";

export type PopupDirection =
  | "top"
  | "bottom"
  | ((elRef: React.RefObject<HTMLDivElement>) => "top" | "bottom");
export type ToggleRef = Element | null | undefined | React.RefObject<Element>;

export interface SharedDropdownProps
  extends React.AllHTMLAttributes<HTMLElement>,
    FocusTrapProps {
  closing: boolean;
  toggleRef: ToggleRef;
  popupDirection: PopupDirection;
}
