import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { OnboardingTooltip, type OnboardingTooltipProps } from './OnboardingTooltip';
import { OnboardingTooltipContainer } from './OnboardingTooltipContainer';

export const OnboardingTooltipPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, 'header'],
        },
        {
          placement: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
        },
        {
          placement: ['top-start'],
          arrowCornerOffset: [5, -5],
        },
        {
          placement: ['top-start'],
          arrowCornerAbsoluteOffset: [10, -1],
        },
      ]}
    >
      {(props: OnboardingTooltipProps) => (
        <OnboardingTooltipContainer
          style={{
            minWidth: '300px',
            height: '100px',
            position: 'relative',
            display: 'flex',
            border: '1px solid #eee',
            alignItems: props.placement?.startsWith('top') ? 'flex-end' : 'flex-start',
            justifyContent: 'center',
          }}
        >
          <OnboardingTooltip text="text" {...props}>
            <div className={TEST_CLASS_NAMES.CONTENT} style={{ display: 'flex' }}>
              Tooltip target
            </div>
          </OnboardingTooltip>
        </OnboardingTooltipContainer>
      )}
    </ComponentPlayground>
  );
};
