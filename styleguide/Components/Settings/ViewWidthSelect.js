import React from "react";
import {
  DESKTOP_SIZE,
  MOBILE_SIZE,
  SMALL_TABLET_SIZE,
  TABLET_SIZE,
} from "@vkui/components/AdaptivityProvider/AdaptivityProvider";
import { Setting } from "../Setting/Setting";

export const ViewWidthSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Ширина окна"
    onChange={onChange}
    value={value}
    options={[MOBILE_SIZE, SMALL_TABLET_SIZE, TABLET_SIZE, DESKTOP_SIZE]}
  />
);
