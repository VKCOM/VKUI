import React from "react";
import { Platform, Scheme } from "@vkui";
import { Setting } from "../Setting/Setting";

export const SchemeSelect = ({ onChange, value, platform, ...restProps }) => {
  let options;

  if (platform === Platform.VKCOM) {
    options = [
      { value: Scheme.VKCOM_LIGHT, title: Scheme.VKCOM_LIGHT },
      { value: Scheme.VKCOM_DARK, title: Scheme.VKCOM_DARK },
    ];
  } else {
    options = [
      { value: Scheme.BRIGHT_LIGHT, title: Scheme.BRIGHT_LIGHT },
      { value: Scheme.SPACE_GRAY, title: Scheme.SPACE_GRAY },
    ];
  }

  return (
    <Setting
      {...restProps}
      label="Тема"
      options={options}
      onChange={onChange}
      value={value}
    ></Setting>
  );
};
