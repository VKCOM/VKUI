import type * as React from 'react';
import { Description } from '@storybook/blocks';
import { SectionGroup } from './SectionGroup';

export const DescriptionBlock: React.FC<{
  component: React.ComponentType<any>;
}> = ({ component }) => {
  const description = <Description of={component} />;
  const descriptionText = description.props.of.__docgenInfo?.description;
  if (!descriptionText) {
    return null;
  }

  return <SectionGroup header="Описание">{description}</SectionGroup>;
};
