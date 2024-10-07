import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Separator, type SeparatorProps } from './Separator';
import { spacingSizeClassNames, type SpacingSize } from '../../lib/spacings/sizes';

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
          noPadding: [true, false],
        },
        {
          direction: ['block'],
          size: ['xl'],
          noPadding: [true],
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
