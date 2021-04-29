import React, { Fragment } from 'react';
import Heading from '../Heading';
import Pathline from '@rsg-components/Pathline';
import Slot from '@rsg-components/Slot';
import Markdown from '@rsg-components/Markdown';
import Examples from '@rsg-components/Examples';
import './ReactComponent.css';
import { SectionHeading } from '../SectionHeading/SectionHeading';

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, slug = '-', filepath, pathLine, href } = component;
  const { description = '', examples = [] } = component.props || {};

  return (
    <div className="ReactComponent">
      <Heading level={1} className="ReactComponent__name">{visibleName}</Heading>
      {/*{pathLine && <Pathline>{pathLine}</Pathline>}*/}
      {description && <Markdown text={description} />}
      {examples.length && <Examples examples={examples} name={name} exampleMode={exampleMode} />}
      <SectionHeading>Свойства и методы</SectionHeading>
      <Slot name="docsTabs" props={component} />
    </div>
  )
}

export default ReactComponent
