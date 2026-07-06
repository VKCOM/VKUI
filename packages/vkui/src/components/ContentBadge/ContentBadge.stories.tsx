import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Icon12Services, Icon16Services, Icon20ServicesFilled } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Flex } from '../Flex/Flex';
import { Group } from '../Group/Group';
import { ContentBadge, type ContentBadgeAppearance, type ContentBadgeProps } from './ContentBadge';
import type { ContentBadgeModeType } from './types.ts';

const commonStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  flexWrap: 'wrap',
  outline: '1px dashed',
  padding: 24,
};

const meta: Meta<ContentBadgeProps> = {
  title: 'Data Display/ContentBadge',
  component: ContentBadge,
  parameters: createStoryParameters('ContentBadge', CanvasFullLayout, DisableCartesianParam, {
    liveCodeEditor: {
      scope: { commonStyles },
    },
  }),
  tags: ['Отображение данных'],
};

export default meta;

type Story = StoryFn<ContentBadgeProps>;

export const Playground: Story = (props: ContentBadgeProps) => {
  return (
    <Group style={commonStyles}>
      <Flex align="center" gap={24}>
        <ContentBadge {...props}>{props.children}</ContentBadge>

        <ContentBadge {...props}>
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {props.children}
        </ContentBadge>

        <ContentBadge {...props}>
          {props.children}
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>

        <ContentBadge {...props}>
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
          {props.children}
          <ContentBadge.IconSlot>
            {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
          </ContentBadge.IconSlot>
        </ContentBadge>
      </Flex>
    </Group>
  );
};

Playground.args = {
  children: 'Text',
};

export const CustomAppearance: Story = (props: ContentBadgeProps) => {
  const CUSTOM_APPEARANCES: ContentBadgeAppearance[] = [
    '#FF6699',
    'var(--vkui--color_icon_tertiary)',
  ];
  const MODES: ContentBadgeModeType[] = ['primary', 'secondary', 'outline'];

  return (
    <Group style={commonStyles}>
      <Flex direction="column" gap={16}>
        {CUSTOM_APPEARANCES.map((appearance) => (
          <Flex key={appearance} align="center" gap={24}>
            {MODES.map((mode) => (
              <ContentBadge key={mode} appearance={appearance} mode={mode} {...props}>
                <ContentBadge.IconSlot>
                  {props.size === 'l' ? <Icon16Services /> : <Icon12Services />}
                </ContentBadge.IconSlot>
                {props.children}
              </ContentBadge>
            ))}
          </Flex>
        ))}
      </Flex>
    </Group>
  );
};

CustomAppearance.args = {
  children: 'Text',
};

export const SingleIcon: Story = (props: ContentBadgeProps) => {
  if (props.size === 's') {
    return <div>size=&quot;s&quot; не поддерживает иконки</div>;
  }
  return (
    <Group style={commonStyles}>
      <ContentBadge {...props}>
        <ContentBadge.IconSlot>
          {props.size === 'l' ? <Icon20ServicesFilled /> : <Icon16Services />}
        </ContentBadge.IconSlot>
      </ContentBadge>
    </Group>
  );
};

SingleIcon.args = {
  capsule: true,
};
