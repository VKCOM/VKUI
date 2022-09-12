import * as React from "react";
import {
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from "@vkontakte/icons";
import { getPlatformClassName } from "../../../helpers/getPlatformClassName";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { Platform } from "../../../lib/platform";
import { CellProps } from "../Cell";
import "./CellCheckbox.css";

export type CellCheckboxProps = Pick<CellProps, "defaultChecked" | "checked"> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const CellCheckbox = ({
  className,
  style,
  ...restProps
}: CellCheckboxProps) => {
  const platform = usePlatform();

  const IconOff =
    platform === Platform.IOS || platform === Platform.VKCOM
      ? Icon24CheckCircleOff
      : Icon24CheckBoxOff;

  const IconOn =
    platform === Platform.IOS || platform === Platform.VKCOM
      ? Icon24CheckCircleOn
      : Icon24CheckBoxOn;

  return (
    <div
      vkuiClass={classNames(
        "CellCheckbox",
        getPlatformClassName("CellCheckbox", platform)
      )}
      className={className}
      style={style}
    >
      <input vkuiClass="CellCheckbox__input" type="checkbox" {...restProps} />
      <IconOff vkuiClass="CellCheckbox__icon CellCheckbox__icon--off" />
      <IconOn vkuiClass="CellCheckbox__icon CellCheckbox__icon--on" />
    </div>
  );
};
