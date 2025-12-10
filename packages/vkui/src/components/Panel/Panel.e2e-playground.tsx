import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
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
            <React.Fragment key="">
              <PanelHeader>Head</PanelHeader>
              {content(500)}
            </React.Fragment>,
            <React.Fragment key="">
              <PanelHeader>Head</PanelHeader>
              {content(30)}
            </React.Fragment>,
          ],
          $adaptivity: 'x',
        },
      ]}
    >
      {(props: PanelProps) => (
        <div
          style={{
            height: '200px',
            boxSizing: 'content-box',
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

export const PanelModePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          $adaptivity: 'x',
          mode: ['plain', 'card', undefined],
        },
        {
          $adaptivity: 'x',
          disableBackground: [true],
        },
      ]}
    >
      {(props: PanelProps) => (
        <Panel {...props}>
          <div style={{ padding: '8px', boxSizing: 'content-box' }}>
            <Group mode={props.mode}>
              <div style={{ minHeight: '100px', minWidth: '100px' }}>
                Text within Group with mode {props.mode}
              </div>
            </Group>
          </div>
        </Panel>
      )}
    </ComponentPlayground>
  );
};
