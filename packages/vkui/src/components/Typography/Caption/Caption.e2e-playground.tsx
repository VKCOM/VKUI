import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Caption, type CaptionProps } from './Caption';

export const CaptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          level: ['1', '2', '3'],
          weight: [undefined, '1', '2', '3'],
          caps: [undefined, true],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props: CaptionProps) => (
        <Caption {...props} style={{ marginBottom: 16 }}>
          Caption lvl{props.level} {props.caps && 'CAPS'} {props.weight}
        </Caption>
      )}
    </ComponentPlayground>
  );
};
