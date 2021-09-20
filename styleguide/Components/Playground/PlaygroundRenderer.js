import React, { cloneElement } from 'react';
import { Settings } from '../Settings/Settings';
import { SectionSubheading } from '../SectionSubheading/SectionSubheading';
import { withAdaptivity, ViewWidth } from '@vkui';

class PlaygroundRenderer extends React.Component {
  render() {
    const {
      name,
      preview,
      previewProps,
      tabBody,
      exampleIndex,
      viewWidth,
    } = this.props;
    const {
      layout = true, // Нужны ли примеру обвесы в виде SplitLayout, SplitCol, etc
      iframe = true, // Нужно ли рендерить пример в айфреме
      integration,
      containerStyle,
      config,
      ...wrapperProps
    } = previewProps;
    const exampleId = `${name}-${exampleIndex}`;

    if (viewWidth <= ViewWidth.MOBILE) {
      return null;
    }

    return (
      <div className="Playground">
        <SectionSubheading href={`#/${name}?id=example`}>Пример реализации</SectionSubheading>
        <Settings layout={layout} />
        <div className="Playground__preview" {...wrapperProps} data-preview={name}>
          {cloneElement(preview, { ...preview.props, layout, iframe, containerStyle, integration, config, exampleId })}
        </div>
        <SectionSubheading href={`#/${name}?id=code`}>Редактируемый код</SectionSubheading>
        <div className="Playground__code">
          {tabBody}
        </div>
      </div>
    );
  }
}

export default withAdaptivity(PlaygroundRenderer, { viewWidth: true });
