import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Headline, type HeadlineProps } from './Headline';

export const HeadlinePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          level: [undefined, '1', '2'],
          weight: [undefined, '1', '2', '3'],
          $adaptivity: 'y',
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props: HeadlineProps) => {
        let title = 'Headline';
        if (props.level) {
          title += ' level' + props.level;
        }
        if (props.weight) {
          title += ' weight' + props.weight;
        }
        return (
          <Headline {...props} style={{ marginBottom: 16 }}>
            {title}
          </Headline>
        );
      }}
    </ComponentPlayground>
  );
};
