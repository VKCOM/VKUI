import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { withLabel } from '@vkui-e2e/utils';
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
          $direction: true,
        },
        {
          multiple: [true],
          defaultValue: [withLabel<[number, number]>([20, 80], '20 - 80')],
        },
        {
          multiple: [true],
          defaultValue: [withLabel<[number, number]>([30, 90], '30 - 90')],
          $direction: 'rtl',
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
  ...props
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ComponentPlayground {...props}>
      {(sliderProps: SliderProps | SliderMultipleProps) => (
        <div
          style={{
            padding: '80px 30px 30px',
            width: '320px',
            height: 'auto',
          }}
        >
          <Slider withTooltip {...sliderProps} />
        </div>
      )}
    </ComponentPlayground>
  );
};

export const SliderPlaygroundForKeyboardTestWithTabButton = ({
  ...props
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          defaultValue: [withLabel<[number, number]>([20, 80], '20 - 80')],
          multiple: [true],
          withTooltip: [true],
        },
      ]}
    >
      {(sliderProps: SliderProps | SliderMultipleProps) => (
        <div
          style={{
            padding: '80px 30px 30px',
            width: '320px',
            height: 'auto',
          }}
        >
          <Slider {...sliderProps} />
        </div>
      )}
    </ComponentPlayground>
  );
};

export const SliderPlaygroundForTooltipTest = (
  props: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps),
) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          defaultValue: [24.4234234234234],
          min: [24.4234],
          max: [30],
          withTooltip: [true],
        },
      ]}
    >
      {(sliderProps: SliderProps | SliderMultipleProps) => (
        <div
          style={{
            padding: '80px 30px 30px',
            boxSizing: 'content-box',
            width: '320px',
            height: 'auto',
          }}
        >
          <Slider {...sliderProps} />
        </div>
      )}
    </ComponentPlayground>
  );
};
