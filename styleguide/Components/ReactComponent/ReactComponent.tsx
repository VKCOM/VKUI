import React from 'react';
import Heading from '../Heading';
import Slot from '@rsg-components/Slot';
import Markdown from '@rsg-components/Markdown';
import Examples from '@rsg-components/Examples';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Caption, Link } from '@vkui';
import pkg from '../../../package.json'
import './ReactComponent.css';

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, slug = '-', filepath, pathLine, href } = component;
  const { description = '', examples = [] } = component.props || {};

  return (
    <div className="ReactComponent">
      <Link target="_blank" className="ReactComponent__src" href={`${pkg.repository}/tree/v${pkg.version}/${pathLine.replace('../', '')}`}>
        <Caption Component="span" level="1" weight="regular">Github</Caption>
      </Link>
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
