import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { PanelHeaderEdit, type PanelHeaderEditProps } from '../PanelHeaderEdit/PanelHeaderEdit';

export const PanelHeaderEditPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      { isActive: [true], doneLabel: ['done'] },
      { isActive: [false], editLabel: ['edit'] },
    ]}
  >
    {(props: PanelHeaderEditProps) => <PanelHeaderEdit {...props} />}
  </ComponentPlayground>
);
