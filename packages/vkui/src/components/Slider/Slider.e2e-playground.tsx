import {
  AppDefaultWrapper,
  ComponentPlayground,
  type ComponentPlaygroundProps,
} from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { ConfigProvider } from '../ConfigProvider/ConfigProvider';
import { Slider, type SliderMultipleProps, type SliderProps } from './Slider';

export const SliderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          defaultValue: [50],
          disabled: [true],
        },
        {
          // https://github.com/VKCOM/VKUI/issues/4044
          min: [-10],
          max: [10],
          value: [0],
        },
        {
          multiple: [true],
          defaultValue: [[20, 80]],
        },
        {
          defaultValue: [50],
          $adaptivity: 'y',
        },

        {
          size: ['l', 'm', 's'],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: SliderProps | SliderMultipleProps) => (
        <Slider style={{ minWidth: '320px' }} {...props} />
      )}
    </ComponentPlayground>
  );
};

export const SliderPlaygroundForKeyboardTest = ({
  colorScheme,
  ...restProps
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider hasPointer>
        <AppDefaultWrapper disableDecorations>
          <Slider style={{ minWidth: '320px' }} {...restProps} />
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const SliderPlaygroundForTooltipTest = ({
  colorScheme,
  ...restProps
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ConfigProvider colorScheme={colorScheme}>
      <AdaptivityProvider hasPointer>
        <AppDefaultWrapper
          disableDecorations
          style={{
            padding: '80px 30px 30px',
            width: '320px',
            height: 'auto',
          }}
        >
          <Slider withTooltip {...restProps} />
        </AppDefaultWrapper>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
