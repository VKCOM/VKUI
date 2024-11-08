import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Counter, type CounterProps } from './Counter';

export const CounterPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['3'],
          mode: ['primary'],
          appearance: ['accent'],
          size: ['m', 's'],
          $adaptivity: 'y',
        },
        {
          children: ['3'],
          mode: ['primary', 'contrast', 'tertiary'],
          appearance: ['accent', 'neutral', 'accent-green', 'accent-red'],
        },
      ]}
    >
      {(props: CounterProps) => (
        <div>
          <Counter {...props} />
        </div>
      )}
    </ComponentPlayground>
  );
};
