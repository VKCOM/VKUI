import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '../AppRoot/AppRoot';
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
      ]}
    >
      {(props: SliderProps | SliderMultipleProps) => (
        <Slider style={{ minWidth: '320px' }} {...props} />
      )}
    </ComponentPlayground>
  );
};

export const SliderPlaygroundForKeyboardTest = ({
  appearance,
  ...restProps
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider hasPointer>
        <AppRoot>
          <Slider style={{ minWidth: '320px' }} {...restProps} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export const SliderPlaygroundForTooltipTest = ({
  appearance,
  ...restProps
}: ComponentPlaygroundProps & (SliderProps | SliderMultipleProps)) => {
  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider hasPointer>
        <AppRoot
          style={{
            padding: '80px 30px 30px',
            width: '320px',
            height: 'auto',
          }}
        >
          <Slider withTooltip {...restProps} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
