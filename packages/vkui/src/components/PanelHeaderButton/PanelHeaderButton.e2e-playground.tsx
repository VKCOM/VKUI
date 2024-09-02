import { Icon28AddOutline } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { PanelHeaderBack } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderClose } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderEdit, type PanelHeaderEditProps } from '../PanelHeaderEdit/PanelHeaderEdit';
import { PanelHeaderSubmit } from '../PanelHeaderSubmit/PanelHeaderSubmit';
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
      {(props: PanelHeaderButtonProps) => <PanelHeaderClose {...props} />}
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
      ]}
    >
      {(props: PanelHeaderButtonProps) => <PanelHeaderBack {...props} />}
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
          children: [undefined, 'Children'],
        },
      ]}
    >
      {(props: PanelHeaderButtonProps) => <PanelHeaderSubmit {...props} />}
    </ComponentPlayground>
  );
};
