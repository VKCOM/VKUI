import React from 'react';
import { useStyleGuideContext } from '@rsg-components/Context';
import Examples from '@rsg-components/Examples';
import Markdown from '@rsg-components/Markdown';
import Slot from '@rsg-components/Slot';
import { Caption, classNames, Link } from '@vkui';
import { VKUI_PACKAGE } from '../../../shared';
import { getDeprecatedFromComponentTags } from '../../utils';
import Heading from '../Heading/index';
import { SectionSubheading } from '../SectionSubheading/SectionSubheading';
import './ReactComponent.css';

const toKebabCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '');

const getSectionName = (sections) => {
  return sections[0].slug?.split('-')[1];
};

const ReactComponent = ({ component, exampleMode, ...rest }) => {
  const { name, visibleName, pathLine } = component;
  const { description = '', examples = [] } = component.props || {};
  const deprecated = getDeprecatedFromComponentTags(component);
  const { sections } = useStyleGuideContext();

  const githubTag = `cmp:${toKebabCase(visibleName)}`;
  const issuesQuery = `is:open is:issue label:${githubTag}`;
  const sectionName = getSectionName(sections);
  const storybooComponentUrl = `/story/${sectionName}-${visibleName.toLowerCase()}`;

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
      <div className="ReactComponent__divider">•</div>
      <Link
        target="_blank"
        className="ReactComponent__src"
        href={`${VKUI_PACKAGE.URLS.HOMEPAGE}playground?path=${encodeURIComponent(
          storybooComponentUrl,
        )}`}
      >
        <Caption>Storybook</Caption>
      </Link>
      <Heading
        level={1}
        className={classNames(
          'ReactComponent__name',
          deprecated.isDeprecated && 'ReactComponent__name--deprecated',
        )}
      >
        {visibleName}
      </Heading>
      {deprecated.description && (
        <Text Component="blockquote" className="Blockquote">
          <Markdown text={`**@deprecated**: ${deprecated.description}`} />
        </Text>
      )}
      {description && <Markdown text={description} />}
      {examples.length > 0 && (
        <Examples examples={examples} name={name} exampleMode={exampleMode} />
      )}
      <SectionSubheading href={`#/${name}?id=props`}>Свойства и методы</SectionSubheading>
      {process.env.NODE_ENV === 'development' && process.env.VKUI_STYLEGUIDE_PROPSPARSER !== 1 ? (
        <Text Component="blockquote" className="Blockquote">
          В режиме разработки свойства и методы не генерируются по умолчанию. Если они вам нужны,
          воспользуйтесь командой <code className="Code">yarn docs:styleguide:props</code>.
        </Text>
      ) : (
        <Slot name="docsTabs" props={component} />
      )}
    </div>
  );
};

export default ReactComponent;
