import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ScreenSpinner, type ScreenSpinnerProps } from './ScreenSpinner';

export const ScreenSpinnerLoadingPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          state: ['loading', 'cancelable', 'error'],
          mode: [undefined, 'overlay'],
        },
        {
          state: ['loading', 'cancelable', 'error'],
          label: ['Text for screenspinner to test layout'],
        },
      ]}
    >
      {(props: ScreenSpinnerProps) => (
        <ScreenSpinner.Container {...props}>
          {(props.state === 'loading' || props.state === 'cancelable') && (
            <ScreenSpinner.Loader disableAnimation />
          )}
          <ScreenSpinner.SwapIcon />
        </ScreenSpinner.Container>
      )}
    </ComponentPlayground>
  );
};
