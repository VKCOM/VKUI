import { Icon24AddOutline, Icon28AddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { PanelHeaderButton, type PanelHeaderButtonProps } from './PanelHeaderButton';

export const PanelHeaderButtonPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: [<Icon28AddOutline key="icon" />],
          primary: [true, false],
          label: [undefined, 'label', <span key="label">label</span>],
        },
        {
          children: [<Icon28AddOutline key="icon-28" />, <Icon24AddOutline key="icon-24" />],
          label: [
            <Counter size="s" mode="primary" appearance="accent-red" key="counter">
              33
            </Counter>,
            <Badge mode="prominent" key="badge" />,
          ],
        },
      ]}
    >
      {(props: PanelHeaderButtonProps) => <PanelHeaderButton {...props} />}
    </ComponentPlayground>
  );
};
