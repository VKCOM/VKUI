import React, { FC } from 'react';
import { PlatformSelect } from '../PlatformSelect';
import { SchemeSelect } from '../SchemeSelect';
import { WebviewTypeSelect } from '../WebviewTypeSelect';
import { HasMouseCheckbox } from '../HasMouseCheckbox';
import { ViewHeightSelect } from '../ViewHeightSelect';
import { ViewWidthSelect } from '../ViewWidthSelect';
import { IntegrationSelect } from '../IntegrationSelect';
import './Settings.css';
import { Platform } from '@vkui';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';

export const Settings: FC = () => {
  return (
    <StyleGuideContext.Consumer>
      {(context) => {
        return (
          <div className="Settings">
            <div className="Settings__in">
              <IntegrationSelect
                onChange={(e) => context.setContext({ integration: e.target.value })}
                value={context.integration}
              />
              <PlatformSelect
                onChange={(e) => context.setContext({ platform: e.target.value })}
                value={context.platform}
              />
              <SchemeSelect
                onChange={(e) => context.setContext({ scheme: e.target.value })}
                value={context.scheme}
                disabled={context.platform === Platform.VKCOM}
              />
              <WebviewTypeSelect
                onChange={(e) => context.setContext({ webviewType: e.target.value })}
                value={context.webviewType}
              />
              <HasMouseCheckbox
                onChange={(e) => context.setContext({ hasMouse: e.target.checked })}
                value={context.hasMouse}
                disabled={context.platform === Platform.VKCOM}
              />
              <ViewHeightSelect
                onChange={(e) => context.setContext({ height: Number(e.target.value) })}
                value={context.height}
              />
              <ViewWidthSelect
                onChange={(e) => context.setContext({ width: Number(e.target.value) })}
                value={context.width}
                disabled={context.platform === Platform.VKCOM}
              />
            </div>
          </div>
        );
      }}
    </StyleGuideContext.Consumer>
  )
}
