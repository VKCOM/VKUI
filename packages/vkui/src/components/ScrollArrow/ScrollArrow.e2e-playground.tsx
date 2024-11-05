import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ScrollArrow, type ScrollArrowProps } from './ScrollArrow';

export const ScrollArrowPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['s', 'm'],
          direction: ['left', 'right', 'up', 'down'],
        },
      ]}
    >
      {({ ...restProps }: ScrollArrowProps) => (
        <ScrollArrow style={{ padding: 16 }} {...restProps} />
      )}
    </ComponentPlayground>
  );
};
