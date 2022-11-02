import React, { Fragment } from "react";
import { PlatformSelect } from "./PlatformSelect";
import { AppearanceSelect } from "./AppearanceSelect";
import { WebviewTypeSelect } from "./WebviewTypeSelect";
import { HasMouseCheckbox } from "./HasMouseCheckbox";
import { ViewHeightSelect } from "./ViewHeightSelect";
import { ViewWidthSelect } from "./ViewWidthSelect";
import { Platform, useAdaptivityConditionalRender } from "@vkui";
import { StyleGuideContext } from "../StyleGuide/StyleGuideRenderer";
import "./Settings.css";

export const Settings = ({ adaptivity, webviewType }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <StyleGuideContext.Consumer>
      {(context) => {
        return (
          <div className="Settings">
            <div className="Settings__in">
              <PlatformSelect
                onChange={(platform) => context.setContext({ platform })}
                value={context.platform}
              />
              <AppearanceSelect
                onChange={(appearance) => context.setContext({ appearance })}
                value={context.appearance}
              />
              {webviewType && (
                <WebviewTypeSelect
                  onChange={(v) => context.setContext({ webviewType: v })}
                  value={context.webviewType}
                />
              )}
              {adaptivity && (
                <Fragment>
                  {sizeX.regular && (
                    <ViewHeightSelect
                      className={sizeX.regular.className}
                      onChange={(height) => context.setContext({ height })}
                      value={context.height}
                    />
                  )}
                  {sizeX.regular && (
                    <ViewWidthSelect
                      className={sizeX.regular.className}
                      onChange={(width) => context.setContext({ width })}
                      value={context.width}
                      disabled={context.platform === Platform.VKCOM}
                    />
                  )}
                  {sizeX.regular && (
                    <HasMouseCheckbox
                      className={sizeX.regular.className}
                      onChange={(hasMouse) => context.setContext({ hasMouse })}
                      value={context.hasMouse}
                      disabled={context.platform === Platform.VKCOM}
                    />
                  )}
                </Fragment>
              )}
            </div>
          </div>
        );
      }}
    </StyleGuideContext.Consumer>
  );
};
