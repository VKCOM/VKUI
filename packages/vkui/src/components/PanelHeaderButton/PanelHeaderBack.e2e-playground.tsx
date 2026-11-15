import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { PanelHeaderBack, type PanelHeaderBackProps } from '../PanelHeaderBack/PanelHeaderBack';

export const PanelHeaderBackPlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground
    {...props}
    propSets={[
      {
        primary: [true, false],
        label: [undefined, 'label'],
        $direction: true,
      },
      {
        hideLabelOnIOS: [true, false],
        hideLabelOnVKCom: [true, false],
        label: ['label'],
      },
    ]}
  >
    {(props: PanelHeaderBackProps) => <PanelHeaderBack {...props} />}
  </ComponentPlayground>
);
