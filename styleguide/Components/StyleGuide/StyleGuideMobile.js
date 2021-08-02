import { View, Panel, PanelHeader, PanelHeaderClose, PanelHeaderButton } from '@vkui';
import React, { useCallback, useEffect, useState } from 'react';
import { Icon28LogoVk, Icon28MenuOutline, Icon28MoonOutline } from '@vkontakte/icons';
import './StyleGuideMobile.css';

const StyleGuideMobileHeader = ({ left, switchStyleGuideScheme }) => {
  return (
    <PanelHeader
      left={left}
      right={
        <PanelHeaderButton>
          <Icon28MoonOutline onClick={switchStyleGuideScheme} />
        </PanelHeaderButton>
      }
    >
      <div className="StyleGuideMobile__header">
        <Icon28LogoVk />
        <span className="StyleGuideMobile__headerText">ui</span>
      </div>
    </PanelHeader>
  );
};

export const StyleGuideMobile = (props) => {
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
        <StyleGuideMobileHeader
          switchStyleGuideScheme={props.switchStyleGuideScheme}
          left={
            <PanelHeaderButton onClick={() => setActivePanel('menu')}>
              <Icon28MenuOutline />
            </PanelHeaderButton>
          }
        />
        <div className="StyleGuideMobile__content">
          {props.children}
        </div>
      </Panel>
      <Panel id="menu">
        <StyleGuideMobileHeader
          switchStyleGuideScheme={props.switchStyleGuideScheme}
          left={<PanelHeaderClose onClick={() => setActivePanel('content')} />}
        />
        {props.toc}
      </Panel>
    </View>
  );
};
