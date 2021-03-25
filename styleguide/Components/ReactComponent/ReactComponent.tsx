import React, { Fragment } from 'react';
import { Title } from '@vkui';
import Pathline from '@rsg-components/Pathline';
import Slot from '@rsg-components/Slot';
import Markdown from '@rsg-components/Markdown';
import Examples from '@rsg-components/Examples';

const ReactComponent = ({ component }) => {
  const { name, visibleName, slug = '-', filepath, pathLine, href } = component;
  const { description = '', examples = [] } = component.props || {};

  return (
    <div className="ReactComponent">
      <Title className="ReactComponent__title" weight="medium" level="1">{visibleName}</Title>
      {pathLine && <Pathline>{pathLine}</Pathline>}
      {description && <Markdown text={description} />}
      {examples.length && <Examples examples={examples} name={name} />}
      <Title className="ReactComponent__sectionHeader" weight="medium" level="2">Свойства</Title>
      <Slot name="docsTabs" props={component} />
    </div>
  )
}

export default ReactComponent
