import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '@rsg-components/SectionHeading';
import Markdown from '@rsg-components/Markdown';

export const SectionRenderer = (allProps) => {
  const { title, name, slug, content, components, sections, depth, description, pagePerSection } =
    allProps;

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
          {title || name}
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
  components: PropTypes.node,
  sections: PropTypes.node,
  isolated: PropTypes.bool,
  depth: PropTypes.number.isRequired,
  pagePerSection: PropTypes.bool,
};

export default SectionRenderer;
