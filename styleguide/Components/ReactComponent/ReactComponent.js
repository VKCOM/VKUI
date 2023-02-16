import React from 'react';
import Examples from '@rsg-components/Examples';
import Markdown from '@rsg-components/Markdown';
import Slot from '@rsg-components/Slot';
import { classNames, Link } from '@vkui';
import { VKUI_PACKAGE } from '../../../shared';
import { deprecated } from '../../deprecated';
import Heading from '../Heading/index';
import { SectionSubheading } from '../SectionSubheading/SectionSubheading';
import './ReactComponent.css';

const toKebabCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '');

const ReactComponent = ({ component, exampleMode }) => {
  const { name, visibleName, pathLine } = component;
  const { description = '', examples = [] } = component.props || {};
  const isDeprecated = deprecated.includes(name);

  const showPropsPlaceholder =
    process.env.NODE_ENV === 'development' && process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1;

  const githubTag = `cmp:${toKebabCase(visibleName)}`;
  const issuesQuery = `is:open is:issue label:${githubTag}`;

  return (
    <div className="ReactComponent">
      <Link
        target="_blank"
        className="ReactComponent__src"
        href={`${VKUI_PACKAGE.URLS.REPOSITORY}/tree/v${VKUI_PACKAGE.VERSION}/${pathLine.replace(
          '../',
          '',
        )}`}
      >
        <Caption>Source</Caption>
      </Link>
      <div className="ReactComponent__divider">•</div>
      <Link
        target="_blank"
        className="ReactComponent__src"
        href={`${VKUI_PACKAGE.URLS.ISSUES}?q=${encodeURIComponent(issuesQuery)}`}
      >
        <Caption>Issues</Caption>
      </Link>
      <Heading
        level={1}
        className={classNames('ReactComponent__name', {
          'ReactComponent__name--deprecated': isDeprecated,
        })}
      >
        {visibleName}
      </Heading>
      {description && <Markdown text={description} />}
      {examples.length > 0 && (
        <Examples examples={examples} name={name} exampleMode={exampleMode} />
      )}
      <SectionSubheading href={`#/${name}?id=props`}>Свойства и методы</SectionSubheading>
      {showPropsPlaceholder ? (
        <blockquote className="Blockquote">
          <Text>
            В режиме разработки свойства и методы не генерируются по умолчанию. Если они вам
            необходимы, воспользуйтесь командой <span className="Code">yarn styleguide:props</span>.
          </Text>
        </blockquote>
      ) : (
        <Slot name="docsTabs" props={component} />
      )}
    </div>
  );
};

export default ReactComponent;
