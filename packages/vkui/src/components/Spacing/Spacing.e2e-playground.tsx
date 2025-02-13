import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { type SpacingSize, spacingSizeClassNames } from '../../lib/spacings/sizes';
import { type CSSCustomProperties } from '../../types';
import { Div } from '../Div/Div';
import { Separator } from '../Separator/Separator';
import { Spacing, type SpacingProps } from './Spacing';

const sizes = Object.keys(spacingSizeClassNames) as SpacingSize[];
const divStyle: React.CSSProperties & CSSCustomProperties = {
  'width': 100,
  'boxSizing': 'content-box',
  '--my-custom-var': '8px',
};

export const SpacingPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: [undefined, ...sizes, 8, 16, 24, '--my-custom-var'],
        },
      ]}
    >
      {({ size }: SpacingProps) => (
        <Div style={divStyle}>
          <Separator padding />
          <Spacing size={size} />
          <Separator padding />
          <Spacing size={size} />
          <Spacing size={size} style={{ background: '#b0bfb4' }}>
            <Separator padding />
          </Spacing>
        </Div>
      )}
    </ComponentPlayground>
  );
};
