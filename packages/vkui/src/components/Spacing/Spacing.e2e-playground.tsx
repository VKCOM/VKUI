import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { type SpacingSize, spacingSizeClassNames } from '../../lib/spacings/sizes';
import { Div } from '../Div/Div';
import { Separator } from '../Separator/Separator';
import { Spacing, type SpacingProps } from './Spacing';

const sizes = Object.keys(spacingSizeClassNames) as SpacingSize[];

export const SpacingPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [undefined, ...sizes, 8, 16, 24],
        },
      ]}
    >
      {({ size }: SpacingProps) => (
        <Div style={{ width: 100 }}>
          <Separator />
          <Spacing size={size} />
          <Separator />
          <Spacing size={size} />
          <Spacing size={size} style={{ background: '#b0bfb4' }}>
            <Separator />
          </Spacing>
        </Div>
      )}
    </ComponentPlayground>
  );
};
