import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { type SnackbarsQueueStrategy, useSnackbar } from '../../hooks/useSnackbar';
import { CanvasFullLayout, DisableCartesianParam, StringArg } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Flex } from '../Flex/Flex';
import { FormItem } from '../FormItem/FormItem.tsx';
import { Image } from '../Image/Image';
import { Select } from '../Select/Select';
import { Snackbar, type SnackbarProps } from './Snackbar';
import { type SnackbarPlacement } from './types';

const story: Meta<SnackbarProps> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  parameters: createStoryParameters('Snackbar', CanvasFullLayout, DisableCartesianParam),
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
  tags: ['Обратная связь'],
};

export default story;

type Story = StoryObj<Omit<SnackbarProps, 'after'> & { after?: boolean }>;

const PLACEMENT: Array<Exclude<SnackbarProps['placement'], undefined>> = [
  'top-start',
  'bottom-start',
  'top',
  'bottom',
  'top-end',
  'bottom-end',
];

const COLUMNS = [PLACEMENT.slice(0, 2), PLACEMENT.slice(2, 4), PLACEMENT.slice(4)];

export const Playground: Story = {
  render: function Render({ onClose, ...args }) {
    const [snackbarApi, contextHolder] = useSnackbar({
      queueStrategy: 'queue',
    });
    const [autoHide, setAutoHide] = React.useState(true);

    const _onOpen = (placement: SnackbarPlacement) => {
      snackbarApi.open({ duration: autoHide ? undefined : null, ...args, placement });
    };

    const _onUpdate = () => {
      const snackbars = snackbarApi.getSnackbars();
      snackbars.forEach((snackbar) => {
        snackbarApi.update(snackbar.id, {
          action: 'Обновлен',
          children: 'Текст и всякое другое',
        });
      });
    };

    return (
      <>
        <Flex direction="column" gap="2xl">
          <Flex gap="2xl">
            {COLUMNS.map((placements) => (
              <Flex direction="column" gap="xl" key={placements.join('_')}>
                {placements.map((placement) => (
                  <Button key={placement} onClick={() => _onOpen(placement)}>
                    {placement}
                  </Button>
                ))}
              </Flex>
            ))}
          </Flex>
          <Checkbox checked={autoHide} onChange={() => setAutoHide((v) => !v)}>
            Автоскрытие
          </Checkbox>
          <FormItem top="Overflow behavior" htmlFor="custom-select" noPadding>
            <Select
              options={[
                { value: 'queue', label: 'queue' },
                { value: 'shift', label: 'shift' },
              ]}
              defaultValue="queue"
              onChange={(_, v) => snackbarApi.setQueueStrategy(v as SnackbarsQueueStrategy)}
              id="custom-select"
            />
          </FormItem>
          <Button appearance="negative" stretched onClick={snackbarApi.closeAll}>
            Закрыть все
          </Button>
          <Button appearance="negative" stretched onClick={_onUpdate}>
            Обновить все
          </Button>
        </Flex>
        {contextHolder}
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
