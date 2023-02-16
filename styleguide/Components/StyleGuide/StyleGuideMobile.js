import React, { useCallback, useEffect, useState } from 'react';
import { Icon28MenuOutline, Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderClose,
  useAppearance,
  View,
} from '@vkui';
import { Logo } from '../Logo/Logo';
import { StyleGuideModal } from './StyleGuideModal';
import './StyleGuideMobile.css';

const StyleGuideMobileHeader = ({ before, switchStyleGuideAppearance }) => {
  const appearance = useAppearance();

  return (
    <PanelHeader
      before={before}
      after={
        <PanelHeaderButton onClick={switchStyleGuideAppearance} aria-label="Сменить тему">
          {appearance === 'dark' ? <Icon28SunOutline /> : <Icon28MoonOutline />}
        </PanelHeaderButton>
      }
    >
      <div className="StyleGuideMobile__header">
        <Logo />
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
    <div className="StyleGuideMobile">
      <SplitLayout
        popout={props.popout}
        modal={<StyleGuideModal activeModal={props.activeModal} />}
      >
        <SplitCol>
          <View activePanel={activePanel}>
            <Panel id="content">
              <StyleGuideMobileHeader
                switchStyleGuideAppearance={props.switchStyleGuideAppearance}
                before={
                  <PanelHeaderButton
                    aria-label="Показать меню"
                    onClick={() => setActivePanel('menu')}
                  >
                    <Icon28MenuOutline />
                  </PanelHeaderButton>
                }
              />
              <div className="StyleGuideMobile__content">{props.children}</div>
            </Panel>
            <Panel id="menu">
              <StyleGuideMobileHeader
                switchStyleGuideAppearance={props.switchStyleGuideAppearance}
                before={
                  <PanelHeaderClose
                    aria-label="Скрыть меню"
                    onClick={() => setActivePanel('content')}
                  />
                }
              />
              {props.toc}
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
