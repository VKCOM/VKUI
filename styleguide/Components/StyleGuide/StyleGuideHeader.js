import {
  SplitCol,
  SplitLayout,
  Link,
  IconButton,
  Tappable,
  useAppearance,
} from "@vkui";
import { Icon28MoonOutline, Icon28SunOutline } from "@vkontakte/icons";
import { Logo } from "../Logo/Logo";
import React from "react";
import pkg from "../../../package.json";
import "./StyleGuideHeader.css";

export const StyleGuideHeader = ({ switchStyleGuideAppearance }) => {
  const appearance = useAppearance();

  return (
    <div className="StyleGuideHeader">
      <SplitLayout>
        <SplitCol
          minWidth={340}
          width="30%"
          maxWidth={480}
          className="StyleGuideHeader__left"
        >
          <div className="StyleGuideHeader__leftIn">
            <Tappable
              hasActive={false}
              hasHover={false}
              Component="a"
              href="#/About"
              className="StyleGuideHeader__logo"
            >
              <Logo />
            </Tappable>
          </div>
        </SplitCol>
        <SplitCol width="100%" className="StyleGuideHeader__main">
          <div className="StyleGuideHeader__links">
            <Link
              target="_blank"
              className="StyleGuideHeader__link"
              href="https://www.npmjs.com/package/@vkontakte/vkui"
            >
              <Text>v{pkg.version}</Text>
            </Link>
            <Link
              target="_blank"
              className="StyleGuideHeader__link"
              href="https://github.com/VKCOM/VKUI"
            >
              <Text>Github</Text>
            </Link>
            <Link
              target="_blank"
              className="StyleGuideHeader__link"
              href="https://github.com/VKCOM/VKUI/releases"
            >
              <Text>Релизы</Text>
            </Link>
          </div>
          <div className="StyleGuideHeader__aside">
            <IconButton
              aria-label="Сменить тему"
              className="StyleGuideHeader__scheme"
              onClick={switchStyleGuideAppearance}
            >
              {appearance === "dark" ? (
                <Icon28SunOutline />
              ) : (
                <Icon28MoonOutline />
              )}
            </IconButton>
          </div>
        </SplitCol>
      </SplitLayout>
    </div>
  );
};
