import React, { Fragment } from 'react';
import { PlatformSelect } from './PlatformSelect';
import { SchemeSelect } from './SchemeSelect';
import { WebviewTypeSelect } from './WebviewTypeSelect';
import { HasMouseCheckbox } from './HasMouseCheckbox';
import { ViewHeightSelect } from './ViewHeightSelect';
import { ViewWidthSelect } from './ViewWidthSelect';
// import { IntegrationSelect } from '../IntegrationSelect';
import './Settings.css';
import { Platform, useAdaptivity, ViewWidth } from '@vkui';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';
import { TokensSourceSelect } from './TokensSourceSelect';

export const Settings = ({ layout }) => {
  const { viewWidth } = useAdaptivity();
  const isMobile = viewWidth <= ViewWidth.MOBILE;
  return (
    <StyleGuideContext.Consumer>
      {(context) => {
        return (
          <div className="Settings">
            <div className="Settings__in">
              {/* <IntegrationSelect*/}
              {/*  onChange={(e) => context.setContext({ integration: e.target.value })}*/}
              {/*  value={context.integration}*/}
              {/* />*/}
              <PlatformSelect
                allowVkCom={!isMobile}
                onChange={(platform) => context.setContext({ platform })}
                value={context.platform}
              />
              {!isMobile && (
                <SchemeSelect
                  onChange={(scheme) => context.setContext({ scheme })}
                  value={context.scheme}
                  disabled={context.platform === Platform.VKCOM}
                />
              )}
              {!isMobile && (
                <TokensSourceSelect
                  onChange={(tokens) => context.setContext({ tokens })}
                  value={context.tokens}
                  disabled={context.platform === Platform.VKCOM}
                />
              )}
              {layout && !isMobile &&
                <Fragment>
                  <WebviewTypeSelect
                    onChange={(webviewType) => context.setContext({ webviewType })}
                    value={context.webviewType}
                  />
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
              }
            </div>
          </div>
        );
      }}
    </StyleGuideContext.Consumer>
  );
};
