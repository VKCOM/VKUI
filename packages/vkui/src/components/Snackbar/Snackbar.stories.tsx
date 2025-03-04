import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { Avatar } from '../Avatar/Avatar';
import { Flex } from '../Flex/Flex';
import { Image } from '../Image/Image';
import { Snackbar, type SnackbarProps } from './Snackbar';
import { type SnackbarPlacement } from './types';
import { useSnackbar } from './useSnackbar';

const story: Meta<SnackbarProps> = {
  title: 'Popouts/Snackbar',
  component: Snackbar,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    before: createFieldWithPresets({
      iconSizes: ['24', '28'],
      additionalPresets: {
        Icon24ThumbsUpOutline: <Icon24ThumbsUpOutline fill="var(--vkui--color_icon_accent)" />,
        Icon28ErrorCircleOutline: (
          <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />
        ),
        Avatar: <Avatar size={32} src={getAvatarUrl()} />,
        Image: <Image size={40} src={getAvatarUrl('app_shorm_online')} />,
      },
    }),
    after: createFieldWithPresets({
      iconSizes: ['24'],
      sizeIconsCount: 10,
      additionalPresets: {
        Avatar: <Avatar size={32} src={getAvatarUrl()} />,
      },
    }),
    subtitle: StringArg,
    offsetY: StringArg,
  },
};

export default story;

type Story = StoryObj<Omit<SnackbarProps, 'after'> & { after?: boolean }>;

const PLACEMENT: Array<Exclude<SnackbarProps['placement'], undefined>> = [
  'top-start',
  'top',
  'top-end',
  'bottom-start',
  'bottom',
  'bottom-end',
];

export const Playground: Story = {
  render: function Render({ onClose, ...args }) {
    const [api, snackbarHolder] = useSnackbar();
    const [placementSnackbar, setPlacementSnackbar] = useState<Record<string, string>>({});

    const _onOpen = (placement: SnackbarPlacement) => {
      const id = api.open({ ...args, placement });
      setPlacementSnackbar((v) => ({
        ...v,
        [placement]: id,
      }));
    };

    const _onClose = (placement: SnackbarPlacement) => {
      const id = placementSnackbar[placement] || 'bottom-start';
      api.close(id);
    };

    return (
      <>
        <Flex direction="column" gap="2xl">
          {PLACEMENT.map((placement) => (
            <Flex gap="2xl" key={placement}>
              <button onClick={() => _onOpen(placement)}>Открыть {placement}</button>
              <button onClick={() => _onClose(placement)}>Закрыть {placement}</button>
            </Flex>
          ))}
        </Flex>
        {snackbarHolder}
      </>
    );
  },
  args: {
    before: 'Icon24ThumbsUpOutline',
    action: 'Поделиться',
    children: 'Этот сервис рекомендует один друг',
  },
  argTypes: {
    action: { control: 'text' },
  },
};

export const WithSubtitle: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    subtitle: 'Вы можете порекомендовать сервис в дополнительном меню',
  },
};

export const WithBottomOffset: Story = {
  ...Playground,
  args: {
    ...Playground.args,
    action: undefined,
    offsetY: '48px',
  },
};
