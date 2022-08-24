import React from "react";
import { Breakpoints } from "@vkui/lib/adaptivity";
import { Setting } from "../Setting/Setting";

export const ViewWidthSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Ширина окна"
    onChange={onChange}
    value={value}
    options={[
      Breakpoints.MOBILE,
      Breakpoints.SMALL_TABLET,
      Breakpoints.TABLET,
      Breakpoints.DESKTOP,
    ]}
  />
);
