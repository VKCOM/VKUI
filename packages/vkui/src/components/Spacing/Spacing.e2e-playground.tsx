import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { Separator } from '../Separator/Separator';
import { ALLOWED_SIZES, Spacing, SpacingProps } from './Spacing';

export const SpacingPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [undefined, ...ALLOWED_SIZES, 8, 16, 24],
        },
      ]}
    >
      {({ size }: SpacingProps) => (
        <Div style={{ width: 100 }}>
          <Separator />
          <Spacing size={size} />
          <Separator />
        </Div>
      )}
    </ComponentPlayground>
  );
};
