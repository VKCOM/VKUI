import * as React from 'react';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Tooltip, type TooltipProps } from './Tooltip';
import { TooltipContainer } from './TooltipContainer';

export const TooltipPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          header: [undefined, 'header'],
        },
        {
          alignX: ['left', 'right'],
          alignY: ['top', 'bottom'],
        },
        {
          alignX: ['left'],
          alignY: ['top'],
          cornerOffset: [5, -5],
        },
        {
          alignX: ['left'],
          alignY: ['top'],
          cornerAbsoluteOffset: [10, -1],
        },
      ]}
    >
      {(props: TooltipProps) => (
        <TooltipContainer
          style={{
            minWidth: '300px',
            height: '100px',
            position: 'relative',
            display: 'flex',
            border: '1px solid #eee',
            alignItems: props.alignY === 'top' ? 'flex-end' : 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Tooltip text="text" {...props}>
            <div className={TEST_CLASS_NAMES.CONTENT} style={{ display: 'flex' }}>
              Tooltip target
            </div>
          </Tooltip>
        </TooltipContainer>
      )}
    </ComponentPlayground>
  );
};
