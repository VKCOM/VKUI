import React, { Fragment } from "react";
import { PlatformSelect } from "./PlatformSelect";
import { AppearanceSelect } from "./AppearanceSelect";
import { HasMouseCheckbox } from "./HasMouseCheckbox";
import { ViewHeightSelect } from "./ViewHeightSelect";
import { ViewWidthSelect } from "./ViewWidthSelect";
import "./Settings.css";
import { Platform, useAdaptivity, ViewWidth } from "@vkui";
import { StyleGuideContext } from "../StyleGuide/StyleGuideRenderer";

export const Settings = ({ adaptivity }) => {
  const { viewWidth } = useAdaptivity();
  const isMobile = viewWidth <= ViewWidth.MOBILE;
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
              {adaptivity && !isMobile && (
                <Fragment>
                  <ViewHeightSelect
                    onChange={(height) => context.setContext({ height })}
                    value={context.height}
                  />
                  <ViewWidthSelect
                    onChange={(width) => context.setContext({ width })}
                    value={context.width}
                    disabled={context.platform === Platform.VKCOM}
                  />
                  <HasMouseCheckbox
                    onChange={(hasMouse) => context.setContext({ hasMouse })}
                    value={context.hasMouse}
                    disabled={context.platform === Platform.VKCOM}
                  />
                </Fragment>
              )}
            </div>
          </div>
        );
      }}
    </StyleGuideContext.Consumer>
  );
};
