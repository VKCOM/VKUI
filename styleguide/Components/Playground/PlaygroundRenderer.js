import React, { cloneElement } from "react";
import { Settings } from "../Settings/Settings";
import { SectionSubheading } from "../SectionSubheading/SectionSubheading";
import { useAdaptivity, getSizeXClassName } from "@vkui";
import "./PlaygroundRenderer.css";

const PlaygroundRenderer = ({
  name,
  preview,
  previewProps,
  tabBody,
  exampleIndex,
}) => {
  const {
    layout = true, // Обвесы в виде SplitLayout, SplitCol, etc
    iframe = true, // Рендерить пример в айфреме
    adaptivity: _adaptivity, // Продвинутые контролеры настроек адаптивности
    webviewType = false, // Контролер настроек webviewType
    integration,
    containerStyle,
    config,
    ...wrapperProps
  } = previewProps;
  const exampleId = `${name}-${exampleIndex}`;

  const { sizeX } = useAdaptivity();

  const adaptivity = _adaptivity ?? layout;

  return (
    <div className="Playground">
      <SectionSubheading href={`#/${name}?id=example${exampleIndex}`}>
        Пример реализации
      </SectionSubheading>
      <Settings adaptivity={adaptivity} webviewType={webviewType} />
      <div
        className="Playground__preview"
        {...wrapperProps}
        data-preview={name}
      >
        {cloneElement(preview, {
          ...preview.props,
          layout,
          iframe,
          adaptivity,
          containerStyle,
          integration,
          config,
          exampleId,
        })}
      </div>
      <div className={getSizeXClassName("Playground__editor", sizeX)}>
        <SectionSubheading href={`#/${name}?id=code${exampleIndex}`}>
          Редактируемый код
        </SectionSubheading>
        <div className="Playground__code">{tabBody}</div>
      </div>
    </div>
  );
};

export default PlaygroundRenderer;
