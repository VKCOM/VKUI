import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Chip, type ChipProps } from './Chip';

export const ChipPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          removable: [false, true],
          $adaptivity: 'y',
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
