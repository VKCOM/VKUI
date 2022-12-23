import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Tooltip, TooltipProps } from './Tooltip';
import { TooltipContainer } from './TooltipContainer';

describe('Tooltip', () => {
  describeScreenshotFuzz<TooltipProps>(
    (props) => (
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
          <div className="vkuiProps" style={{ display: 'flex' }}>
            Tooltip target
          </div>
        </Tooltip>
      </TooltipContainer>
    ),
    [
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
    ],
  );
});
