import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { DisplayTitle, type DisplayTitleProps } from './DisplayTitle';

export const DisplayTitlePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          level: ['1'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          level: ['2'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          level: ['3'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          level: ['4'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props: DisplayTitleProps) => (
        <DisplayTitle {...props} style={{ marginBottom: 16 }}>
          DisplayTitle lvl{props.level} {props.weight}
        </DisplayTitle>
      )}
    </ComponentPlayground>
  );
};
