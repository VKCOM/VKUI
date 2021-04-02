import { Fragment } from 'react';
import Panel, { PanelProps } from './Panel';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import PanelHeader from '../../components/PanelHeader/PanelHeader';

describe('Panel', () => {
  const content = (h: number) => <div style={{ minHeight: `${h}px`, width: '100px', background: '#eee' }}>top text</div>;
  describeScreenshotFuzz<PanelProps>((props) => (
    <div style={{ height: '200px', overflow: 'auto', transform: 'translateZ(0)', border: '1px solid red', marginBottom: '10px' }}>
      <Panel {...props} />
    </div>
  ), [{
    centered: [true, false],
    children: [
      <Fragment key="">
        <PanelHeader>Head</PanelHeader>
        {content(500)}
      </Fragment>,
      <Fragment key="">
        <PanelHeader>Head</PanelHeader>
        {content(30)}
      </Fragment>,
    ],
    $adaptivity: 'x',
  }], {
    wrapInApp: false,
  });
});
