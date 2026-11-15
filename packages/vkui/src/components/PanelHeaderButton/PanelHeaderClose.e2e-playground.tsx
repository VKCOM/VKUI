import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { PanelHeaderClose, type PanelHeaderCloseProps } from '../PanelHeaderClose/PanelHeaderClose';

export const PanelHeaderClosePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props} propSets={[{ primary: [true, false] }]}>
    {(props: PanelHeaderCloseProps) => <PanelHeaderClose {...props} />}
  </ComponentPlayground>
);
