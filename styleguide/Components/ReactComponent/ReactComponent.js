import React from "react";
import Heading from "../Heading/index";
import Slot from "@rsg-components/Slot";
import Markdown from "@rsg-components/Markdown";
import Examples from "@rsg-components/Examples";
import { SectionSubheading } from "../SectionSubheading/SectionSubheading";
import { Caption, Link } from "@vkui";
import { classNames } from "@vkontakte/vkjs";
import { deprecated } from "../../deprecated";
import { tokenized } from "../../tokenized";
import { unstable } from "../../unstable";
import { TextTooltip } from "@vkui/components/TextTooltip/TextTooltip";
import { Icon28WarningTriangleOutline } from "@vkontakte/icons";
import pkg from "../../../package.json";
import "./ReactComponent.css";

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, pathLine } = component;
  const { description = "", examples = [] } = component.props || {};
  const isDeprecated = deprecated.includes(name);

  const showPropsPlaceholder =
    process.env.NODE_ENV === "development" &&
    process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1;

  return (
    <div className="ReactComponent">
      <Link
        target="_blank"
        className="ReactComponent__src"
        href={`${pkg.repository}/tree/v${pkg.version}/${pathLine.replace(
          "../",
          ""
        )}`}
      >
        <Caption>Github</Caption>
      </Link>
      <Heading
        level={1}
        className={classNames("ReactComponent__name", {
          "ReactComponent__name--deprecated": isDeprecated,
        })}
      >
        {visibleName}{" "}
        {tokenized.includes(visibleName) && (
          <TextTooltip
            placement="right"
            text={
              <React.Fragment>
                Компонент поддерживает{" "}
                <Link
                  target="_blank"
                  href="https://github.com/VKCOM/vkui-tokens"
                >
                  vkui-tokens
                </Link>
              </React.Fragment>
            }
          >
            <svg
              className="ReactComponent__tokenized"
              width={24}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="tokenized_outline_28"
            >
              <path
                d="M8 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V8M24 8V7C24 6.20435 23.6839 5.44129 23.1213 4.87868C22.5587 4.31607 21.7956 4 21 4H20M20 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V20M4 20V21C4 21.7956 4.31607 22.5587 4.87868 23.1213C5.44129 23.6839 6.20435 24 7 24H8M18 10H10M14 18V10"
                stroke="var(--vkui--color_icon_accent)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </TextTooltip>
        )}
        {unstable.includes(visibleName) && (
          <TextTooltip
            placement="right"
            text={
              <React.Fragment>
                Компонент является <Link href="#/Unstable">нестабильным</Link>
              </React.Fragment>
            }
          >
            <Icon28WarningTriangleOutline
              className="ReactComponent__unstable"
              width={24}
              fill="var(--vkui--color_accent_orange)"
              title="Компонент является нестабильным"
            />
          </TextTooltip>
        )}
      </Heading>
      {description && <Markdown text={description} />}
      {examples.length > 0 && (
        <Examples examples={examples} name={name} exampleMode={exampleMode} />
      )}
      <SectionSubheading href={`#/${name}?id=props`}>
        Свойства и методы
      </SectionSubheading>
      {showPropsPlaceholder ? (
        <blockquote className="Blockquote">
          <Text>
            В режиме разработки свойства и методы не генерируются по умолчанию.
            Если они вам необходимы, воспользуйтесь командой{" "}
            <span className="Code">yarn styleguide:props</span>.
          </Text>
        </blockquote>
      ) : (
        <Slot name="docsTabs" props={component} />
      )}
    </div>
  );
};

export default ReactComponent;
