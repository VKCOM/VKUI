import React, { cloneElement } from 'react';
import { useAdaptivityConditionalRender } from '@vkui';
import { SectionSubheading } from '../SectionSubheading/SectionSubheading';
import { Settings } from '../Settings/Settings';

const PlaygroundRenderer = ({ name, preview, previewProps, tabBody, exampleIndex }) => {
  const {
    layout = true, // Обвесы в виде SplitLayout, SplitCol, etc
    iframe = true, // Рендерить пример в айфреме
    adaptivity: _adaptivity, // Продвинутые контролеры настроек адаптивности
    showCustomPanelHeaderAfterProps = false, // Контролер настроек связанных с пользовательским слотом `after` у `PanelHeader`
    integration,
    containerStyle,
    config,
    ...wrapperProps
  } = previewProps;
  const exampleId = `${name}-${exampleIndex}`;

  const { sizeX } = useAdaptivityConditionalRender();

  const adaptivity = _adaptivity ?? layout;

  return (
    <div className="Playground">
      <SectionSubheading href={`#/${name}?id=example${exampleIndex}`}>
        Пример реализации
      </SectionSubheading>
      <Settings
        adaptivity={adaptivity}
        showCustomPanelHeaderAfterProps={showCustomPanelHeaderAfterProps}
      />
      <div className="Playground__preview" {...wrapperProps} data-preview={name}>
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
      {sizeX.regular && (
        <div className={sizeX.regular.className}>
          <SectionSubheading href={`#/${name}?id=code${exampleIndex}`}>
            Редактируемый код
          </SectionSubheading>
          <div className="Playground__code">{tabBody}</div>
        </div>
      )}
    </div>
  );
};

export default PlaygroundRenderer;
