import * as React from 'react';
import Markdown from '@rsg-components/Markdown';
import SectionHeading from '@rsg-components/SectionHeading';

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

export default SectionRenderer;
