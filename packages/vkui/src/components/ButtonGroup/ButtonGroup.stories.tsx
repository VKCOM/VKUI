import * as React from 'react';
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon16Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';

const story: Meta<ButtonGroupProps> = {
  title: 'Layout/ButtonGroup',
  component: ButtonGroup,
  parameters: createStoryParameters('ButtonGroup', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<ButtonGroupProps>;

const ButtonText = 'Button';
const StretchedButtonText = 'Button (stretched)';
const ButtonWithIconLabel = 'Кнопка с иконкой';

export const Playground: Story = {
  args: {
    children: (
      <>
        <Button size="l" appearance="accent">
          {ButtonText}
        </Button>
        <Button size="l" appearance="accent" stretched>
          {StretchedButtonText}
        </Button>
        <Button
          size="m"
          appearance="accent"
          before={<Icon24Add />}
          aria-label={ButtonWithIconLabel}
        />
        <Button
          size="m"
          appearance="accent"
          before={<Icon24Add />}
          aria-label={ButtonWithIconLabel}
          stretched
        />
        <Button
          size="s"
          appearance="accent"
          before={<Icon16Add />}
          aria-label={ButtonWithIconLabel}
        />
        <Button
          size="s"
          appearance="accent"
          before={<Icon16Add />}
          aria-label={ButtonWithIconLabel}
          stretched
        />
      </>
    ),
  },
};

const ButtonGroupHighlightStyles: React.CSSProperties = {
  border: '2px dotted tomato',
  boxSizing: 'border-box',
};

export const NestedButtonGroup: Story = {
  ...Playground,
  args: {
    children: (
      <>
        <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent" stretched>
            {StretchedButtonText}
          </Button>
          <Button
            size="l"
            appearance="accent"
            before={<Icon24Add />}
            aria-label={ButtonWithIconLabel}
          />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
          <Button
            size="l"
            appearance="accent"
            before={<Icon24Add />}
            aria-label={ButtonWithIconLabel}
          />
        </ButtonGroup>

        <ButtonGroup mode="horizontal" gap="m" stretched={false} style={ButtonGroupHighlightStyles}>
          <Button size="l" appearance="accent">
            {ButtonText}
          </Button>
          <Button
            size="l"
            appearance="accent"
            before={<Icon24Add />}
            aria-label={ButtonWithIconLabel}
          />
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
          <Button
            size="l"
            appearance="accent"
            before={<Icon24Add />}
            aria-label={ButtonWithIconLabel}
            stretched
          />
          <ButtonGroup mode="horizontal" stretched style={ButtonGroupHighlightStyles}>
            <Button
              size="l"
              appearance="accent"
              before={<Icon24Add />}
              aria-label={ButtonWithIconLabel}
            />
            <Button size="l" appearance="accent" stretched>
              {StretchedButtonText}
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </>
    ),
  },
  decorators: [(Component, context) => <Component args={context.args} />],
};
