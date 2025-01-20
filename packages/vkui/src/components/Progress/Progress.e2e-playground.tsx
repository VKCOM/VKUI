import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Progress } from './Progress';

export const ProgressPlayground = (props: ComponentPlaygroundProps): React.ReactNode => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          appearance: [undefined, 'negative', 'positive'],
          value: [30],
        },
        {
          height: [10],
          value: [30],
        },
        {
          appearance: ['custom', 'accent'],
          value: [30],
          color: ['#c805f5'],
        },
        {
          appearance: ['accent'],
          value: [30],
          trackDisable: [true],
        },
      ]}
    >
      {Progress}
    </ComponentPlayground>
  );
};
