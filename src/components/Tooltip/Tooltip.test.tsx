import React from 'react';
import { baselineComponent } from '../../testing/utils';
import Tooltip from './Tooltip';
import View from '../View/View';
import Panel from '../Panel/Panel';
import { HasRootRef } from '../../types';

const TooltipTarget = (props: HasRootRef<HTMLDivElement>) => (
  <View activePanel="pan">
    <Panel id="pan">
      <div ref={props.getRootRef}>trigger</div>
    </Panel>
  </View>
);

describe('Tooltip', () => {
  baselineComponent((props) => <Tooltip isShown {...props}><TooltipTarget /></Tooltip>, {
    forward: false,
  });
});
