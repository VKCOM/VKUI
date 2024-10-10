import React, { Fragment } from 'react';
import { useAdaptivityConditionalRender } from '@vkui';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';
import { ColorSchemeSelect } from './ColorSchemeSelect';
import { HasCustomPanelHeaderAfter } from './HasCustomPanelHeaderAfter';
import { HasPointerCheckbox } from './HasPointerCheckbox';
import { LayoutSelect } from './LayoutSelect';
import { PlatformSelect } from './PlatformSelect';
import { ThemeName } from './ThemeName';
import { ViewHeightSelect } from './ViewHeightSelect';
import { ViewWidthSelect } from './ViewWidthSelect';
import './Settings.css';

export const Settings = ({ adaptivity, showCustomPanelHeaderAfterProps, showLayoutSelect }) => {
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
              <ColorSchemeSelect
                disabled={context.appearanceDisabled}
                onChange={(colorScheme) => context.setContext({ colorScheme })}
                value={context.colorScheme}
                options={context.colorSchemeOptions}
              />
              <ThemeName />
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
                      disabled={context.platform === 'vkcom'}
                    />
                  )}
                  {sizeX.regular && (
                    <HasPointerCheckbox
                      className={sizeX.regular.className}
                      onChange={(hasPointer) => context.setContext({ hasPointer })}
                      value={context.hasPointer}
                      disabled={context.platform === 'vkcom'}
                    />
                  )}
                </Fragment>
              )}
              {showLayoutSelect && (
                <LayoutSelect
                  onChange={(layout) => context.setContext({ layout })}
                  value={context.layout}
                />
              )}
            </div>
          </div>
        );
      }}
    </StyleGuideContext.Consumer>
  );
};
