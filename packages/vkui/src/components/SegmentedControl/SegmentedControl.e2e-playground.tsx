import * as React from 'react';
import { Icon24LogoFacebook, Icon24LogoGoogle, Icon24LogoVk } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import {
  SegmentedControl,
  type SegmentedControlOptionInterface,
  type SegmentedControlProps,
} from './SegmentedControl';

type OptionFn = (label: string) => SegmentedControlOptionInterface;
const optionFn: OptionFn = (label: string) => ({ label, value: label });

export const SegmentedControlPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          options: [
            [optionFn('vk'), optionFn('ok')],
            [optionFn('vk'), optionFn('ok'), optionFn('fb')],
            [
              { label: <Icon24LogoVk />, value: 'vk' },
              { label: <Icon24LogoFacebook />, value: 'fb' },
              { label: <Icon24LogoGoogle />, value: 'google' },
            ],
          ],
        },
        {
          options: [[optionFn('vk'), optionFn('ok')]],
          size: ['m', 'l'],
          $adaptivity: 'y',
        },
        {
          options: [
            [
              { label: 'vk', before: <Icon24LogoVk />, value: 'vk' },
              { label: 'fb', before: <Icon24LogoFacebook />, value: 'fb' },
              { label: 'google', before: <Icon24LogoGoogle />, value: 'google' },
            ],
          ],
        },
      ]}
    >
      {(props: SegmentedControlProps) => <SegmentedControl {...props} />}
    </ComponentPlayground>
  );
};
