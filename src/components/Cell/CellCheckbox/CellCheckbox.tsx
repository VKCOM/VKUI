import * as React from "react";
import {
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from "@vkontakte/icons";
import { getClassName } from "../../../helpers/getClassName";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { ANDROID } from "../../../lib/platform";
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
    platform === ANDROID ? Icon24CheckBoxOff : Icon24CheckCircleOff;

  const IconOn = platform === ANDROID ? Icon24CheckBoxOn : Icon24CheckCircleOn;

  return (
    <div
      vkuiClass={classNames(getClassName("CellCheckbox", platform))}
      className={className}
      style={style}
    >
      <input vkuiClass="CellCheckbox__input" type="checkbox" {...restProps} />
      <span vkuiClass="CellCheckbox__icon CellCheckbox__icon--off">
        <IconOff />
      </span>
      <span vkuiClass="CellCheckbox__icon CellCheckbox__icon--on">
        <IconOn />
      </span>
    </div>
  );
};
