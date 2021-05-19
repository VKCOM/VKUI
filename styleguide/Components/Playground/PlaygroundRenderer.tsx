import React, { cloneElement } from 'react';
import { Settings } from '../Settings/Settings';
import { SectionHeading } from '../SectionHeading/SectionHeading';

class PlaygroundRenderer extends React.Component {

  render () {
    const {
      name,
      preview,
      previewProps,
      tabBody,
      exampleIndex,
    } = this.props;
    const {
      autoLayout,
      integration,
      containerStyle,
      config,
      ...wrapperProps
    } = previewProps;
    const exampleId = `${name}-${exampleIndex}`;

    return (
      <div className="Playground">
        <SectionHeading>Пример реализации</SectionHeading>
        <Settings />
        <div className="Playground__preview" {...wrapperProps} data-preview={name}>
          { cloneElement(preview, { ...preview.props, autoLayout, containerStyle, integration, config, exampleId }) }
        </div>
        <SectionHeading level={2}>Редактируемый код</SectionHeading>
        <div className="Playground__code">
          {tabBody}
        </div>
      </div>
    );
  }
}

export default PlaygroundRenderer;
