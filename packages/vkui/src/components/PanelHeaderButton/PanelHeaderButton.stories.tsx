import type { Meta, StoryFn } from '@storybook/react';
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

type PanelHeaderSubmitStory = StoryFn<PanelHeaderSubmitProps>;

type PanelHeaderEditStory = StoryFn<PanelHeaderEditProps>;

type PanelHeaderBackStory = StoryFn<PanelHeaderBackProps>;

type PanelHeaderCloseStory = StoryFn<PanelHeaderCloseProps>;

type PlaygroundStoryProps = StoryFn<PanelHeaderButtonProps>;

export const Playground: PlaygroundStoryProps = (props: PanelHeaderButtonProps) => (
  <PanelHeaderButton {...props} />
);

Playground.args = {
  children: <Icon28AddOutline />,
};

export const PanelHeaderClosePlayground: PanelHeaderCloseStory = (args: PanelHeaderCloseProps) => (
  <PanelHeaderClose {...args} />
);

export const PanelHeaderBackPlayground: PanelHeaderBackStory = (args: PanelHeaderBackProps) => (
  <PanelHeaderBack {...args} />
);

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
