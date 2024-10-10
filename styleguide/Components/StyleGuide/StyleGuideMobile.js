import React, { useCallback, useEffect, useState } from 'react';
import { Icon28MenuOutline, Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PanelHeaderClose,
  SplitCol,
  SplitLayout,
  useColorScheme,
  View,
  VisuallyHidden,
} from '@vkui';
import { Logo } from '../Logo/Logo';
import { StyleGuideModal } from './StyleGuideModal';
import './StyleGuideMobile.css';

const StyleGuideMobileHeader = ({ before, switchStyleGuideColorScheme }) => {
  const colorScheme = useColorScheme();

  return (
    <PanelHeader
      before={before}
      after={
        <PanelHeaderButton onClick={switchStyleGuideColorScheme}>
          {colorScheme === 'dark' ? (
            <>
              <VisuallyHidden>Переключить на светлую тему</VisuallyHidden>
              <Icon28SunOutline />
            </>
          ) : (
            <>
              <VisuallyHidden>Переключить на темную тему</VisuallyHidden>
              <Icon28MoonOutline />
            </>
          )}
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
                switchStyleGuideColorScheme={props.switchStyleGuideColorScheme}
                before={
                  <PanelHeaderButton onClick={() => setActivePanel('menu')}>
                    <VisuallyHidden>Показать меню</VisuallyHidden>
                    <Icon28MenuOutline />
                  </PanelHeaderButton>
                }
              />
              <div className="StyleGuideMobile__content">{props.children}</div>
            </Panel>
            <Panel id="menu">
              <StyleGuideMobileHeader
                switchStyleGuideColorScheme={props.switchStyleGuideColorScheme}
                before={
                  <PanelHeaderClose onClick={() => setActivePanel('content')}>
                    Скрыть меню
                  </PanelHeaderClose>
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
