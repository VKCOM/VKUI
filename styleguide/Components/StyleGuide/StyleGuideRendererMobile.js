import { View, Panel, PanelHeader, PanelHeaderClose, PanelHeaderButton } from '@vkui';
import React, { useCallback, useEffect, useState } from 'react';
import { Icon28MenuOutline, Icon28MoonOutline } from '@vkontakte/icons';
import './StyleGuideMobile.css';

export const StyleGuideRendererMobile = (props) => {
  const [activePanel, setActivePanel] = useState('content');

  const hashChangeListener = useCallback(() => {
    setActivePanel('content');
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeListener);

    return () => {
      window.removeEventListener('hashchange', hashChangeListener);
    };
  }, []);

  return (
    <View activePanel={activePanel} popout={props.popout}>
      <Panel id="content">
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => setActivePanel('menu')}>
              <Icon28MenuOutline />
            </PanelHeaderButton>
          }
          right={
            <PanelHeaderButton>
              <Icon28MoonOutline onClick={props.switchStyleGuideScheme} />
            </PanelHeaderButton>
          }
        >
          ui
        </PanelHeader>
        <div className="StyleGuideMobile__content">
          {props.children}
        </div>
      </Panel>
      <Panel id="menu">
        <PanelHeader
          left={<PanelHeaderClose onClick={() => setActivePanel('content')} />}
        >
          Разделы
        </PanelHeader>
        {props.toc}
      </Panel>
    </View>
  );
};
