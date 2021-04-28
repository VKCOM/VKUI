import React, { cloneElement } from 'react';
import { Settings } from '../Settings/Settings';
import Heading from '../Heading';
import './Playground.css';

class PlaygroundRenderer extends React.Component {

  render () {
    const {
      name,
      preview,
      previewProps,
      tabBody,
    } = this.props;
    const {
      autoLayout,
      integration,
      containerStyle,
      config,
      ...wrapperProps
    } = previewProps;

    return (
      <div className="Playground">
        <Heading level={2}>Пример реализации</Heading>
        <Settings />
        <div className="Playground__preview" {...wrapperProps} data-preview={name}>
          { cloneElement(preview, { ...preview.props, autoLayout, containerStyle, integration, config }) }
        </div>
        <Heading level={2}>Редактируемый код</Heading>
        <div className="Playground__code">
          {tabBody}
        </div>
      </div>
    );
  }
}

export default PlaygroundRenderer;
