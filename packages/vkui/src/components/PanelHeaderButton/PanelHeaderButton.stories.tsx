import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Icon28AddOutline } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { PanelHeaderBack as PanelHeaderBackCmp } from '../PanelHeaderBack/PanelHeaderBack';
import { PanelHeaderClose as PanelHeaderCloseCmp } from '../PanelHeaderClose/PanelHeaderClose';
import {
  PanelHeaderEdit as PanelHeaderEditCmp,
  PanelHeaderEditProps,
} from '../PanelHeaderEdit/PanelHeaderEdit';
import { PanelHeaderSubmit as PanelHeaderSubmitCmp } from '../PanelHeaderSubmit/PanelHeaderSubmit';
import { PanelHeaderButton, PanelHeaderButtonProps } from './PanelHeaderButton';

const story: Meta<PanelHeaderButtonProps> = {
  title: 'Layout/PanelHeaderButton',
  component: PanelHeaderButton,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  args: {
    onClick: noop,
  },
};

export default story;

type Story = StoryObj<PanelHeaderButtonProps>;

export const Playground: Story = {
  render: (args) => {
    return (
      <PanelHeaderButton {...args}>
        <Icon28AddOutline />
      </PanelHeaderButton>
    );
  },
};

export const PanelHeaderClose: Story = {
  render: (args) => {
    return <PanelHeaderCloseCmp {...args} />;
  },
};

export const PanelHeaderBack: Story = {
  render: (args) => {
    return <PanelHeaderBackCmp {...args} />;
  },
};

export const PanelHeaderEdit: StoryObj<PanelHeaderEditProps> = {
  args: {
    isActive: true,
  },
  render: (args) => {
    return <PanelHeaderEditCmp {...args} />;
  },
};

export const PanelHeaderSubmit: Story = {
  render: (args) => {
    return <PanelHeaderSubmitCmp {...args} />;
  },
};
