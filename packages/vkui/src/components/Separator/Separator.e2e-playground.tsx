import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { type SpacingSize, spacingSizeClassNames } from '../../lib/spacings/sizes';
import { type CSSCustomProperties } from '../../types';
import { Separator, type SeparatorProps } from './Separator';

const sizes = Object.keys(spacingSizeClassNames) as SpacingSize[];
const divStyle: CSSCustomProperties = {
  '--my-custom-var': '20px',
};

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
          direction: ['horizontal'],
          size: [undefined, 'xl'],
          padding: [true, false],
        },
        {
          direction: ['vertical'],
          size: ['xl'],
        },
        {
          align: ['start', 'center', 'end'],
          size: ['3xl'],
        },
        {
          direction: ['vertical'],
          align: ['start', 'center', 'end'],
          size: ['3xl'],
        },
        {
          direction: ['horizontal', 'vertical'],
          size: ['--my-custom-var'],
        },
      ]}
    >
      {(props: SeparatorProps) => (
        <div style={props.direction === 'vertical' ? { display: 'flex', ...divStyle } : divStyle}>
          First Item
          <Separator {...props} />
          Second Item
        </div>
      )}
    </ComponentPlayground>
  );
};
