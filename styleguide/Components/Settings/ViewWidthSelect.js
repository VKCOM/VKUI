import React from "react";
import { BREAKPOINTS } from "@vkui/lib/adaptivity";
import { Setting } from "../Setting/Setting";

export const ViewWidthSelect = ({ onChange, value, ...restProps }) => (
  <Setting
    {...restProps}
    label="Ширина окна"
    onChange={onChange}
    value={value}
    options={[
      BREAKPOINTS.MOBILE,
      BREAKPOINTS.SMALL_TABLET,
      BREAKPOINTS.TABLET,
      BREAKPOINTS.DESKTOP,
    ]}
  />
);
