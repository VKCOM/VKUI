import React from "react";
import Heading from "../Heading/index";
import Slot from "@rsg-components/Slot";
import Markdown from "@rsg-components/Markdown";
import Examples from "@rsg-components/Examples";
import { SectionSubheading } from "../SectionSubheading/SectionSubheading";
import { Caption, Link } from "@vkui";
import pkg from "../../../package.json";
import "./ReactComponent.css";
import { tokenized } from "../../tokenized";
import { TextTooltip } from "@vkui/components/TextTooltip/TextTooltip";

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, pathLine } = component;
  const { description = "", examples = [] } = component.props || {};

  const showPropsPlaceholder =
    process.env.NODE_ENV === "development" &&
    process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1;

  console.log(tokenized.includes(visibleName));

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
        <Caption Component="span" level="1" weight="regular">
          Github
        </Caption>
      </Link>
      <Heading level={1} className="ReactComponent__name">
        {visibleName}{" "}
        {tokenized.includes(visibleName) && (
          <TextTooltip
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
            <img
              className="ReactComponent__tokenized"
              width={20}
              alt="Компонент поддерживает vkui-tokens"
              src={require("../../assets/static/tokenized.png")}
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
