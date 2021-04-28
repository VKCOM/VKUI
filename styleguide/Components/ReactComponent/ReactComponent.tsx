import React, { Fragment } from 'react';
import Heading from '../Heading';
import Pathline from '@rsg-components/Pathline';
import Slot from '@rsg-components/Slot';
import Markdown from '@rsg-components/Markdown';
import Examples from '@rsg-components/Examples';
import './ReactComponent.css';

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, slug = '-', filepath, pathLine, href } = component;
  const { description = '', examples = [] } = component.props || {};

  return (
    <div className="ReactComponent">
      <Heading level={1}>{visibleName}</Heading>
      {/*{pathLine && <Pathline>{pathLine}</Pathline>}*/}
      {description && <Markdown text={description} />}
      {examples.length && <Examples examples={examples} name={name} exampleMode={exampleMode} />}
      <Heading level={2}>Свойства</Heading>
      <Slot name="docsTabs" props={component} />
    </div>
  )
}

export default ReactComponent
