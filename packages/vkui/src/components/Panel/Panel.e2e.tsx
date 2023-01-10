import React, { Fragment } from 'react';
import { Panel, PanelProps } from './Panel';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Group } from '../Group/Group';
import { AppRoot } from '../AppRoot/AppRoot';
import { SizeType } from '../../lib/adaptivity';

describe('Panel', () => {
  const content = (h: number) => (
    <Group>
      <div style={{ minHeight: `${h}px`, width: '100px' }}>top text</div>
    </Group>
  );
  describeScreenshotFuzz<PanelProps>(
    (props) => (
      <div
        style={{
          height: '200px',
          overflow: 'auto',
          transform: 'translateZ(0)',
          // чтобы было проще видеть разницу скриншотов
          border: '1px solid blue',
          marginBottom: '10px',
        }}
      >
        <Panel {...props} />
      </div>
    ),
    [
      {
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
      },
    ],
    {
      Wrapper: AppRoot,
      adaptivity: {
        sizeX: SizeType.REGULAR,
      },
    },
  );
});
