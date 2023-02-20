import React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import { Meta, Story } from '@storybook/react';
import { Icon16Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { Button } from '../Button/Button';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const story: Meta<ButtonGroupProps> = {
  title: 'Blocks/ButtonGroup',
  component: ButtonGroup,
  parameters: CanvasFullLayout,
  decorators: [withCartesian],
};

export default story;

const Template: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroup {...args} />;
};

const ButtonText = 'Button';
const StretchedButtonText = 'Button (stretched)';

export const Playground = Template.bind({});
Playground.args = {
  children: (
    <>
      <Button size="l" appearance="accent">
        {ButtonText}
      </Button>
      <Button size="l" appearance="accent" stretched>
        {StretchedButtonText}
      </Button>
      <Button size="m" appearance="accent" before={<Icon24Add />} />
      <Button size="m" appearance="accent" before={<Icon24Add />} stretched />
      <Button size="s" appearance="accent" before={<Icon16Add />} />
      <Button size="s" appearance="accent" before={<Icon16Add />} stretched />
    </>
  ),
};

const ButtonGroupHighlightStyles: React.CSSProperties = {
  border: '2px dotted tomato',
  boxSizing: 'border-box',
};

export const NestedButtonGroup = Template.bind({});
NestedButtonGroup.args = {
  children: (
    <>
      <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
        <Button size="l" appearance="accent" stretched>
          {StretchedButtonText}
        </Button>
        <Button size="l" appearance="accent" before={<Icon24Add />} />
      </ButtonGroup>

      <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
        <Button size="l" appearance="accent" before={<Icon24Add />} />
      </ButtonGroup>

      <ButtonGroup mode="horizontal" gap="m" stretched={false} style={ButtonGroupHighlightStyles}>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
        <Button size="l" appearance="accent" before={<Icon24Add />} />
      </ButtonGroup>

      <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
        <Button size="l" appearance="accent" stretched>
          {StretchedButtonText}
        </Button>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
      </ButtonGroup>

      <ButtonGroup mode="vertical" gap="m" stretched={false} style={ButtonGroupHighlightStyles}>
        <Button size="l" appearance="accent" stretched>
          {StretchedButtonText}
        </Button>
        <Button size="l" appearance="accent" before={<Icon24Add />} stretched />
        <ButtonGroup mode="horizontal" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
          <Button size="l" appearance="accent" stretched>
            {StretchedButtonText}
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </>
  ),
};
NestedButtonGroup.decorators = [(Component, context) => <Component args={context.args} />];
