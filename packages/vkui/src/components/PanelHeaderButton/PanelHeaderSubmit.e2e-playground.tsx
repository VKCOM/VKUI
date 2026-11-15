import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import {
  PanelHeaderSubmit,
  type PanelHeaderSubmitProps,
} from '../PanelHeaderSubmit/PanelHeaderSubmit';

export const PanelHeaderSubmitPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props} propSets={[{ label: [undefined, 'Label'] }]}>
    {(props: PanelHeaderSubmitProps) => <PanelHeaderSubmit {...props} />}
  </ComponentPlayground>
);
