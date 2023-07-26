import React from 'react';
import Markdown from '@rsg-components/Markdown';
import SectionHeading from '@rsg-components/SectionHeading';
import PropTypes from 'prop-types';

export const SectionRenderer = (allProps) => {
  const {
    title,
    name,
    slug,
    content,
    contentTitle,
    components,
    sections,
    depth,
    description,
    pagePerSection,
  } = allProps;

  return (
    <section data-testid={`section-${slug}`}>
      {name && (
        <SectionHeading
          depth={depth}
          id={slug}
          slotName="sectionToolbar"
          pagePerSection={pagePerSection}
          slotProps={allProps}
        >
          {contentTitle || title || name}
        </SectionHeading>
      )}
      {description && <Markdown text={description} />}
      {content}
      {sections}
      {components}
    </section>
  );
};

SectionRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string.isRequired,
  content: PropTypes.node,
  contentTitle: PropTypes.string,
  components: PropTypes.node,
  sections: PropTypes.node,
  isolated: PropTypes.bool,
  depth: PropTypes.number.isRequired,
  pagePerSection: PropTypes.bool,
};

export default SectionRenderer;
