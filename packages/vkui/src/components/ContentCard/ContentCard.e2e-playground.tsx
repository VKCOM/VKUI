import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ContentCard, type ContentCardProps } from './ContentCard';

export const ContentCardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          overTitle: ['Album'],
          title: ['Halsey – Badlands'],
          description: [
            'Badlands is the story about dreams and cruel reality, about opportunities and insurmountable obstacles, about love and broken hearts.',
          ],
          caption: ['Blue Vinyl · EU · 2015'],
          mode: ['tint', 'shadow', 'outline', undefined],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: ContentCardProps) => <ContentCard {...props} />}
    </ComponentPlayground>
  );
};
