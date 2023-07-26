import React from 'react';
import Components from '@rsg-components/Components';
import { useStyleGuideContext } from '@rsg-components/Context';
import Examples from '@rsg-components/Examples';
import Sections from '@rsg-components/Sections';
import PropTypes from 'prop-types';
import SectionRenderer from './SectionRenderer';

const Section = ({ section, depth }) => {
  const {
    config: { pagePerSection },
  } = useStyleGuideContext();
  const {
    name,
    slug,
    filepath,
    content,
    contentTitle,
    components,
    sections,
    description,
    exampleMode,
    usageMode,
    title,
  } = section;

  const contentJsx = Array.isArray(content) ? (
    <Examples examples={content} name={name} exampleMode={exampleMode} />
  ) : null;
  const componentsJsx = components && (
    <Components
      usageMode={usageMode}
      exampleMode={exampleMode}
      components={components}
      depth={depth + 1}
    />
  );

  const sectionsJsx = sections && <Sections sections={sections} depth={depth + 1} />;

  return (
    <SectionRenderer
      description={description}
      pagePerSection={pagePerSection}
      name={name}
      title={title}
      slug={slug}
      filepath={filepath}
      content={contentJsx}
      contentTitle={contentTitle}
      components={componentsJsx}
      sections={sectionsJsx}
      depth={depth}
    />
  );
};

Section.propTypes = {
  section: PropTypes.any.isRequired,
  depth: PropTypes.number.isRequired,
};

export default Section;
