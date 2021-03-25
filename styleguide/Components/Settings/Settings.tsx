import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { PlatformSelect } from '../PlatformSelect';
import { SchemeSelect } from '../SchemeSelect';
import { WebviewTypeSelect } from '../WebviewTypeSelect';
import { HasMouseCheckbox } from '../HasMouseCheckbox';
import { ViewHeightSelect } from '../ViewHeightSelect';
import { ViewWidthSelect } from '../ViewWidthSelect';
import { IntegrationSelect } from '../IntegrationSelect';
import { StyleGuideContext } from '../StyleGuide/StyleGuideRenderer';
import './Settings.css';
import { Platform, SplitCol, SplitLayout } from '../../../src';
import { throttle } from '@vkontakte/vkjs';

export const Settings: FC = () => {
  const fixedRef = useRef();
  const [height, setHeight] = useState(0);

  const resizeListener = useCallback(throttle((e) => {
    setHeight(fixedRef.current.offsetHeight);
  }, 50), []);

  useEffect(() => {
    setHeight(fixedRef.current.offsetHeight);
  })

  useEffect(() => {
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [resizeListener])

  return (
    <StyleGuideContext.Consumer>
      {(context) => {
        return (
          <div className="Settings">
            <div style={{ height }}/>
            <div className="Settings__fixed" ref={fixedRef}>
              <SplitLayout>
                <SplitCol minWidth="360px" width="33.3%" maxWidth="480px" />
                <SplitCol width="100%">
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
                </SplitCol>
              </SplitLayout>
            </div>
          </div>
        )
      }}
    </StyleGuideContext.Consumer>
  )
}
