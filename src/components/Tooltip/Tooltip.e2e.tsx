import { describeScreenshotFuzz } from '../../testing/e2e';
import Tooltip, { TooltipProps } from './Tooltip';
import { TooltipContainer } from './TooltipContainer';

describe('Tooltip', () => {
  describeScreenshotFuzz<TooltipProps>((props) => (
    <TooltipContainer style={{
      minWidth: '320px',
      height: '100px',
      position: 'relative',
      display: 'flex',
      border: '1px solid #eee',
      alignItems: props.alignY === 'top' ? 'flex-end' : 'flex-start',
      justifyContent: 'center',
    }}>
      <Tooltip text="text" {...props}>
        <div style={{ display: 'flex' }}>Tooltip target</div>
      </Tooltip>
    </TooltipContainer>
  ), [{
    header: [undefined, 'header'],
  }, {
    header: ['header'],
    mode: ['light'],
  }, {
    alignX: ['left', 'right'],
    alignY: ['top', 'bottom'],
  }]);
});
