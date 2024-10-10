import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { type SpacingSize, spacingSizeClassNames } from '../../lib/spacings/sizes';
import { Separator, type SeparatorProps } from './Separator';

const sizes = Object.keys(spacingSizeClassNames) as SpacingSize[];

export const SeparatorPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [undefined, ...sizes, 8, 24],
        },
        {
          appearance: ['primary', 'primary-alpha', 'secondary'],
        },
        {
          direction: ['inline'],
          size: [undefined, 'xl'],
          padding: [true, false],
        },
        {
          direction: ['block'],
          size: ['xl'],
        },
        {
          align: ['start', 'center', 'end'],
          size: ['3xl'],
        },
        {
          direction: ['block'],
          align: ['start', 'center', 'end'],
          size: ['3xl'],
        },
      ]}
    >
      {(props: SeparatorProps) => (
        <div style={props.direction === 'block' ? { display: 'flex' } : undefined}>
          First Item
          <Separator {...props} />
          Second Item
        </div>
      )}
    </ComponentPlayground>
  );
};
