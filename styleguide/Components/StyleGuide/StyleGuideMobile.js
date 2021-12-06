import {
  View,
  Panel,
  PanelHeader,
  PanelHeaderClose,
  PanelHeaderButton,
  useAppearance,
} from "@vkui";
import React, { useCallback, useEffect, useState } from "react";
import {
  Icon28MenuOutline,
  Icon28MoonOutline,
  Icon28SunOutline,
} from "@vkontakte/icons";
import { Logo } from "../Logo/Logo";
import "./StyleGuideMobile.css";

const StyleGuideMobileHeader = ({ left, switchStyleGuideScheme }) => {
  const appearance = useAppearance();

  return (
    <PanelHeader
      left={left}
      right={
        <PanelHeaderButton
          onClick={switchStyleGuideScheme}
          aria-label="Сменить тему"
        >
          {appearance === "dark" ? <Icon28SunOutline /> : <Icon28MoonOutline />}
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
  const [activePanel, setActivePanel] = useState("content");

  const hashChangeListener = useCallback(() => {
    setActivePanel("content");
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", hashChangeListener);

    return () => {
      window.removeEventListener("hashchange", hashChangeListener);
    };
  }, []);

  return (
    <View activePanel={activePanel} popout={props.popout}>
      <Panel id="content">
        <StyleGuideMobileHeader
          switchStyleGuideScheme={props.switchStyleGuideScheme}
          left={
            <PanelHeaderButton
              aria-label="Показать меню"
              onClick={() => setActivePanel("menu")}
            >
              <Icon28MenuOutline />
            </PanelHeaderButton>
          }
        />
        <div className="StyleGuideMobile__content">{props.children}</div>
      </Panel>
      <Panel id="menu">
        <StyleGuideMobileHeader
          switchStyleGuideScheme={props.switchStyleGuideScheme}
          left={
            <PanelHeaderClose
              aria-label="Скрыть меню"
              onClick={() => setActivePanel("content")}
            />
          }
        />
        {props.toc}
      </Panel>
    </View>
  );
};
