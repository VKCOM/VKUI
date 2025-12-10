import { noop } from '@vkontakte/vkjs';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { type FocusVisibleMode } from '../../hooks/useFocusVisibleClassName';
import { Tappable, type TappableProps } from './Tappable';

export const TappablePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['Content'],
        },
        {
          hovered: [true],
          children: ['Content'],
        },
        {
          activated: [true],
          children: ['Content'],
        },
      ]}
    >
      {(props: TappableProps) => <Tappable onClick={noop} {...props} />}
    </ComponentPlayground>
  );
};

interface TappableFocusVisiblePlaygroundProps extends ComponentPlaygroundProps {
  mode?: FocusVisibleMode;
}

const TappableFocusVisible = (props: TappableProps) => (
  <div style={{ padding: 10 }}>
    <Tappable id="playwright-test" style={{ border: '1px dashed red' }} onClick={noop} {...props}>
      Tappable:focus-visible
    </Tappable>
  </div>
);

export const TappableFocusVisiblePlayground = ({
  mode = 'inside',
  ...props
}: TappableFocusVisiblePlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        focusVisibleMode: [mode],
      },
    ]}
  >
    {TappableFocusVisible}
  </ComponentPlayground>
);
