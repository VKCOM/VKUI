import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Div } from '../Div/Div';
import { PanelHeader, type PanelHeaderProps } from './PanelHeader';

export const PanelHeaderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          delimiter: ['none', 'auto', 'separator', 'spacing'],
          children: ['PanelHeader'],
          // Чтобы шапка в примерах не улетала наверх
          fixed: [false],
          $adaptivity: 'x',
        },
      ]}
    >
      {(props: PanelHeaderProps) => (
        <>
          <div
            style={{
              // чтобы было проще видеть разницу скриншотов
              border: '1px solid blue',
            }}
          >
            <PanelHeader {...props} />
            <Div>Panel</Div>
          </div>
        </>
      )}
    </ComponentPlayground>
  );
};
