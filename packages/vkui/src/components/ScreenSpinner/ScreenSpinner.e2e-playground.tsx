import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Flex } from '../Flex/Flex';
import { ScreenSpinner, type ScreenSpinnerProps } from './ScreenSpinner';

export const ScreenSpinnerLoadingPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          state: ['loading', 'cancelable'],
        },
      ]}
    >
      {(props: ScreenSpinnerProps) => (
        <Flex margin="auto" gap="m">
          <ScreenSpinner.Container state={props.state}>
            <ScreenSpinner.Loader size={props.size} disableAnimation />
            <ScreenSpinner.SwapIcon />
          </ScreenSpinner.Container>
        </Flex>
      )}
    </ComponentPlayground>
  );
};

export const ScreenSpinnerErrorPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground {...props}>
      {() => (
        <Flex margin="auto" gap="m">
          <ScreenSpinner.Container state="error">
            <ScreenSpinner.SwapIcon />
          </ScreenSpinner.Container>
        </Flex>
      )}
    </ComponentPlayground>
  );
};
