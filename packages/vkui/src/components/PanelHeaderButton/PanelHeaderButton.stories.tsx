import type { Meta, StoryObj } from '@storybook/react';
import { Icon28AddOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { PanelHeaderBack, type PanelHeaderBackProps } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderClose, type PanelHeaderCloseProps } from '../PanelHeaderClose/PanelHeaderClose';
import { PanelHeaderEdit, type PanelHeaderEditProps } from '../PanelHeaderEdit/PanelHeaderEdit';
import {
  PanelHeaderSubmit,
  type PanelHeaderSubmitProps,
} from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { PanelHeaderButton, type PanelHeaderButtonProps } from './PanelHeaderButton';

const story: Meta<PanelHeaderButtonProps> = {
  title: 'Navigation/PanelHeader/PanelHeaderButton',
  component: PanelHeaderButton,
  parameters: createStoryParameters('PanelHeaderButton', CanvasFullLayout, DisableCartesianParam),
  args: {
    onClick: noop,
  },
};
export default story;

type PanelHeaderSubmitStory = StoryObj<PanelHeaderSubmitProps>;

type PanelHeaderEditStory = StoryObj<PanelHeaderEditProps>;

type PanelHeaderBackStory = StoryObj<PanelHeaderBackProps>;

type PanelHeaderCloseStory = StoryObj<PanelHeaderCloseProps>;

type PlaygroundStoryProps = StoryObj<PanelHeaderButtonProps>;

export const Playground: PlaygroundStoryProps = (props: PanelHeaderButtonProps) => (
  <PanelHeaderButton {...props} />
);

Playground.args = {
  children: <Icon28AddOutline />,
};

export const PanelHeaderClosePlayground: PanelHeaderCloseStory = (args: PanelHeaderCloseProps) => (
  <PanelHeaderClose {...args} />
);
PanelHeaderClosePlayground.args = {};

export const PanelHeaderBackPlayground: PanelHeaderBackStory = (args: PanelHeaderBackProps) => (
  <PanelHeaderBack {...args} />
);

PanelHeaderBackPlayground.args = {};

PanelHeaderBackPlayground.argTypes = {
  hideLabelOnVKCom: {
    type: 'boolean',
  },
  hideLabelOnIOS: {
    type: 'boolean',
  },
};

export const PanelHeaderEditPlayground: PanelHeaderEditStory = (args: PanelHeaderEditProps) => (
  <PanelHeaderEdit {...args} />
);

PanelHeaderEditPlayground.args = {
  isActive: true,
};
PanelHeaderEditPlayground.argTypes = {
  doneLabel: StringArg,
  editLabel: StringArg,
};

export const PanelHeaderSubmitPlayground: PanelHeaderSubmitStory = (
  args: PanelHeaderSubmitProps,
) => <PanelHeaderSubmit {...args} />;
PanelHeaderSubmitPlayground.args = {};
