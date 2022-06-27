import * as React from "react";
import { SSRContext } from "../lib/SSR";
import { HasPlatform } from "../types";
import { ConfigProviderContext } from "../components/ConfigProvider/ConfigProviderContext";

export function withPlatform<T extends HasPlatform>(
  Component: React.ComponentType<T>
): React.FC<Omit<T, keyof HasPlatform>> {
  function WithPlatform(props: Omit<T, keyof HasPlatform>) {
    const ssrContext = React.useContext(SSRContext);
    const { platform } = React.useContext(ConfigProviderContext);
    return (
      <Component {...(props as T)} platform={ssrContext.platform || platform} />
    );
  }
  return WithPlatform;
}
