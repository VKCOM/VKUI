import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
import { ContentCard, type ContentCardProps } from './ContentCard';

export const ContentCardPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          overTitle: ['Album'],
          title: [withLabel('Halsey – Badlands', 'Title')],
          description: [
            withLabel(
              'Badlands is the story about dreams and cruel reality, about opportunities and insurmountable obstacles, about love and broken hearts.',
              'Description',
            ),
          ],
          caption: [withLabel('Blue Vinyl · EU · 2015', 'Caption')],
          mode: ['tint', 'shadow', 'outline', undefined],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: ContentCardProps) => <ContentCard {...props} />}
    </ComponentPlayground>
  );
};
