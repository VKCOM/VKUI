import { Fragment } from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AppRoot } from '../AppRoot/AppRoot';
import { Group } from '../Group/Group';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Panel, type PanelProps } from './Panel';

const content = (h: number) => (
  <Group>
    <div style={{ minHeight: `${h}px`, width: '100px' }}>top text</div>
  </Group>
);

export const PanelPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
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
      ]}
      AppWrapper={AppRoot}
    >
      {(props: PanelProps) => (
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
      )}
    </ComponentPlayground>
  );
};
