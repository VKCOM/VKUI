import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipProps } from './Chip';
import { Chip } from './Chip';

export const ChipPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          removable: [false, true],
          $adaptivity: 'y',
        },
        {
          mode: ['secondary'],
          removable: [true],
        },
      ]}
    >
      {(props: ChipProps) => (
        <Chip {...props} value="arctic_monkeys">
          Arctic Monkeys
        </Chip>
      )}
    </ComponentPlayground>
  );
};
