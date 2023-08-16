import React, { Fragment } from 'react';
import { Platform, useAdaptivityConditionalRender } from '@vkui';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';
import { AppearanceSelect } from './AppearanceSelect';
import { HasCustomPanelHeaderAfter } from './HasCustomPanelHeaderAfter';
import { HasPointerCheckbox } from './HasPointerCheckbox';
import { PlatformSelect } from './PlatformSelect';
import { ViewHeightSelect } from './ViewHeightSelect';
import { ViewWidthSelect } from './ViewWidthSelect';
import './Settings.css';

export const Settings = ({ adaptivity, showCustomPanelHeaderAfterProps }) => {
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
              {showCustomPanelHeaderAfterProps && (
                <HasCustomPanelHeaderAfter
                  onChange={(v) => context.setContext({ hasCustomPanelHeaderAfter: v })}
                  value={context.hasCustomPanelHeaderAfter}
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
                    <HasPointerCheckbox
                      className={sizeX.regular.className}
                      onChange={(hasPointer) => context.setContext({ hasPointer })}
                      value={context.hasPointer}
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
