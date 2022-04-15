import React from "react";
import { IOS, VKCOM, ANDROID, Link } from "@vkui";
import { Setting } from "../Setting/Setting";

export const PlatformSelect = ({ onChange, value }) => (
  <Setting
    hint={
      <React.Fragment>
        Свойство <Link href="#/ConfigProvider">ConfigProvider</Link>
      </React.Fragment>
    }
    label="platform"
    onChange={onChange}
    value={value}
    options={[IOS, ANDROID, VKCOM]}
  />
);
