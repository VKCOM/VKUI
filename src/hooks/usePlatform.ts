import * as React from "react";
import { PlatformType } from "../lib/platform";
import { SSRContext } from "../lib/SSR";
import { ConfigProviderContext } from "../components/ConfigProvider/ConfigProviderContext";

export function usePlatform(): PlatformType | undefined {
  const ssrContext = React.useContext(SSRContext);
  const { platform } = React.useContext(ConfigProviderContext);
  return ssrContext.platform || platform;
}
