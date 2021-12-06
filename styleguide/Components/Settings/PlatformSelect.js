import React from "react";
import { IOS, VKCOM, ANDROID } from "@vkui";
import { Setting } from "../Setting/Setting";

export const PlatformSelect = ({ onChange, value, allowVkCom = true }) => (
  <Setting
    label="Платформа"
    onChange={onChange}
    value={value}
    options={[IOS, ANDROID].concat(allowVkCom ? VKCOM : [])}
  />
);
