import React from "react";
import { Link } from "@vkui";
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
    options={[
      "vkBase",
      "vkIOS",
      "vkCom",
      "paradigmBase",
      "paradigmBaseDark",
      "calendar",
      // "calendarDark",
      "calls",
      "cloud",
      "home",
      // "homeDark",
      "media",
      // "mediaDark",
      "mycom",
      "octavius",
      // "octaviusDark",
      // "octaviusCompact",
      // "octaviusCompactDark",
      // "octaviusVK",
      // "octaviusVKDark",
      // "octaviusWhite",
      "otvet",
      // "otvetDark",
      "pharma",
      "promo",
      "search",
      "todo",
    ]}
  />
);
