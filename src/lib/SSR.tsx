import * as React from "react";
import { platform as getPlatform } from "./platform";
import { BrowserInfo, computeBrowserInfo } from "./browser";
import { DOMContext, getDOM } from "../lib/dom";
import { useObjectMemo } from "../hooks/useObjectMemo";
import { ConfigProviderPartial } from "../components/ConfigProvider/ConfigProviderPartial";

export interface SSRContextInterface {
  userAgent: string | undefined;
  browserInfo: BrowserInfo | undefined;
}

export const SSRContext = React.createContext<SSRContextInterface>({
  userAgent: undefined,
  browserInfo: undefined,
});

export interface SSRWrapperProps {
  userAgent?: string;
  browserInfo?: BrowserInfo;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SSR
 */
export const SSRWrapper = ({
  userAgent,
  browserInfo,
  children,
}: SSRWrapperProps) => {
  if (!browserInfo && userAgent) {
    browserInfo = computeBrowserInfo(userAgent);
  }

  const contextValue = useObjectMemo({
    browserInfo,
    userAgent,
  });

  const dom = useObjectMemo(getDOM());

  return (
    <SSRContext.Provider value={contextValue}>
      <ConfigProviderPartial platform={getPlatform(browserInfo)}>
        <DOMContext.Provider value={dom}>{children}</DOMContext.Provider>
      </ConfigProviderPartial>
    </SSRContext.Provider>
  );
};
