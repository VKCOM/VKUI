import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ContentCard, type ContentCardProps } from './ContentCard';

export const ContentCardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<ContentCardProps>
      {...props}
      propSets={[
        {
          subtitle: ['Album'],
          header: ['Halsey – Badlands'],
          text: [
            'Badlands is the story about dreams and cruel reality, about opportunities and insurmountable obstacles, about love and broken hearts.',
          ],
          caption: ['Blue Vinyl · EU · 2015'],
          mode: ['tint', 'shadow', 'outline', undefined],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props) => <ContentCard {...props} />}
    </ComponentPlayground>
  );
};
