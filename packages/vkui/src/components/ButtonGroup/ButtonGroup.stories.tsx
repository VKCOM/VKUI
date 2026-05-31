import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon16Add, Icon24Add } from '@vkontakte/icons';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Button } from '../Button/Button';
import { ButtonGroup, type ButtonGroupProps } from './ButtonGroup';

const ButtonGroupHighlightStyles: React.CSSProperties = {
  border: '2px dotted tomato',
  boxSizing: 'border-box',
};
const ButtonText = 'Button';
const StretchedButtonText = 'Button (stretched)';
const ButtonWithIconLabel = 'Кнопка с иконкой';

const story: Meta<ButtonGroupProps> = {
  title: 'Layout/ButtonGroup',
  component: ButtonGroup,
  parameters: createStoryParameters('ButtonGroup', CanvasFullLayout),
  decorators: [withCartesian],
  tags: ['Раскладка'],
};

export default story;

type Story = StoryObj<ButtonGroupProps>;

export const Playground: Story = (props: ButtonGroupProps) => (
  <ButtonGroup {...props}>
    <Button size="l" appearance="accent">
      {ButtonText}
    </Button>
    <Button size="l" appearance="accent" stretched>
      {StretchedButtonText}
    </Button>
    <Button size="m" appearance="accent" before={<Icon24Add />} aria-label={ButtonWithIconLabel} />
    <Button
      size="m"
      appearance="accent"
      before={<Icon24Add />}
      aria-label={ButtonWithIconLabel}
      stretched
    />
    <Button size="s" appearance="accent" before={<Icon16Add />} aria-label={ButtonWithIconLabel} />
    <Button
      size="s"
      appearance="accent"
      before={<Icon16Add />}
      aria-label={ButtonWithIconLabel}
      stretched
    />
  </ButtonGroup>
);
Playground.args = {};

export const NestedButtonGroup: Story = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup {...props}>
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
    </ButtonGroup>
  );
};

NestedButtonGroup.args = {};
