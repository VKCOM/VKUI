import React from 'react';
import Heading from '../Heading/index';
import Slot from '@rsg-components/Slot';
import Markdown from '@rsg-components/Markdown';
import Examples from '@rsg-components/Examples';
import { SectionSubheading } from '../SectionSubheading/SectionSubheading';
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
      {description && <Markdown text={description} />}
      {examples.length > 0 && <Examples examples={examples} name={name} exampleMode={exampleMode} />}
      <SectionSubheading href={`#/${name}?id=props`}>Свойства и методы</SectionSubheading>
      <Slot name="docsTabs" props={component} />
    </div>
  )
}

export default ReactComponent
