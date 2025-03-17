import type { Meta, StoryObj } from '@storybook/react';
import { Icon28AddOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import {
  PanelHeaderBack as PanelHeaderBackCmp,
  type PanelHeaderBackProps,
} from '../PanelHeaderBack/PanelHeaderBack';
import {
  PanelHeaderClose as PanelHeaderCloseCmp,
  type PanelHeaderCloseProps,
} from '../PanelHeaderClose/PanelHeaderClose';
import {
  PanelHeaderEdit as PanelHeaderEditCmp,
  type PanelHeaderEditProps,
} from '../PanelHeaderEdit/PanelHeaderEdit';
import {
  PanelHeaderSubmit as PanelHeaderSubmitCmp,
  type PanelHeaderSubmitProps,
} from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { PanelHeaderButton, type PanelHeaderButtonProps } from './PanelHeaderButton';

const story: Meta<PanelHeaderButtonProps> = {
  title: 'Layout/PanelHeaderButton',
  component: PanelHeaderButton,
  parameters: createStoryParameters('PanelHeaderButton', CanvasFullLayout, DisableCartesianParam),
  args: {
    onClick: noop,
  },
};

export default story;

type PlaygroundStory = StoryObj<PanelHeaderButtonProps>;

export const Playground: PlaygroundStory = {
  render: (args) => {
    return (
      <PanelHeaderButton {...args}>
        <Icon28AddOutline />
      </PanelHeaderButton>
    );
  },
};

type PanelHeaderCloseStory = StoryObj<PanelHeaderCloseProps>;

export const PanelHeaderClose: PanelHeaderCloseStory = {
  render: (args) => {
    return <PanelHeaderCloseCmp {...args} />;
  },
};

type PanelHeaderBackStory = StoryObj<PanelHeaderBackProps>;

export const PanelHeaderBack: PanelHeaderBackStory = {
  argTypes: {
    hideLabelOnVKCom: {
      type: 'boolean',
    },
    hideLabelOnIOS: {
      type: 'boolean',
    },
  },
  render: (args) => {
    return <PanelHeaderBackCmp {...args} />;
  },
};

type PanelHeaderEditStory = StoryObj<PanelHeaderEditProps>;

export const PanelHeaderEdit: PanelHeaderEditStory = {
  args: {
    isActive: true,
  },
  argTypes: {
    doneLabel: StringArg,
    editLabel: StringArg,
  },
  render: (args) => {
    return <PanelHeaderEditCmp {...args} />;
  },
};

type PanelHeaderSubmitStory = StoryObj<PanelHeaderSubmitProps>;

export const PanelHeaderSubmit: PanelHeaderSubmitStory = {
  render: (args) => {
    return <PanelHeaderSubmitCmp {...args} />;
  },
};
