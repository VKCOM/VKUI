import { Icon24AddOutline, Icon28AddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Badge } from '../Badge/Badge';
import { Counter } from '../Counter/Counter';
import { PanelHeaderBack, type PanelHeaderBackProps } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderClose, type PanelHeaderCloseProps } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderEdit, type PanelHeaderEditProps } from '../PanelHeaderEdit/PanelHeaderEdit';
import {
  PanelHeaderSubmit,
  type PanelHeaderSubmitProps,
} from '../PanelHeaderSubmit/PanelHeaderSubmit';
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

export const PanelHeaderClosePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          primary: [true, false],
        },
      ]}
    >
      {(props: PanelHeaderCloseProps) => <PanelHeaderClose {...props} />}
    </ComponentPlayground>
  );
};

export const PanelHeaderBackPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          primary: [true, false],
          label: [undefined, 'label'],
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
};

export const PanelHeaderEditPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          isActive: [true],
          doneLabel: ['done'],
        },
        {
          isActive: [false],
          editLabel: ['edit'],
        },
      ]}
    >
      {(props: PanelHeaderEditProps) => <PanelHeaderEdit {...props} />}
    </ComponentPlayground>
  );
};

export const PanelHeaderSubmitPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          label: [undefined, 'Label'],
        },
      ]}
    >
      {(props: PanelHeaderSubmitProps) => <PanelHeaderSubmit {...props} />}
    </ComponentPlayground>
  );
};
