'use client';

/* eslint-disable no-console, import/no-default-export */

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline } from '@vkontakte/icons';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Flex } from '../../components/Flex/Flex';
import { type UseSnackbar, useSnackbarManager } from '../../hooks/useSnackbarManager';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { type SnackbarPlacement, type SnackbarProps } from './types';

const story: Meta<UseSnackbar.Props> = {
  title: 'Utils/useSnackbarManager',
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    limit: {
      control: 'number',
    },
    queueStrategy: {
      control: 'radio',
      options: ['queue', 'shift'],
    },
    offsetYStart: {
      control: 'number',
    },
    offsetYEnd: {
      control: 'number',
    },
  },
};

export default story;

type Story = StoryObj<UseSnackbar.Props>;

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
  render: function Render(props) {
    const [snackbarApi, contextHolder] = useSnackbarManager(props);
    const [snackbars, setSnackbars] = React.useState<Set<string>>(new Set());
    const [autoHide, setAutoHide] = React.useState(true);
    const count = React.useRef(0);

    const _onOpen = (placement: SnackbarPlacement) => {
      const { id } = snackbarApi.open({
        duration: autoHide ? undefined : null,
        before: <Icon24ThumbsUpOutline />,
        placement,
        children: `Уведомление показано! ${count.current}`,
        onClose: () => {
          setSnackbars((oldState) => {
            oldState.delete(id);
            return new Set([...oldState]);
          });
        },
      });
      count.current = count.current > 100 ? 0 : count.current + 1;
      setSnackbars((oldState) => new Set([...oldState, id]));
    };

    const _onUpdate = () => {
      [...snackbars].forEach((snackbarId) => {
        snackbarApi.update(snackbarId, {
          action: 'Обновлен',
          children: 'Текст и всякое другое',
        });
      });
    };

    return (
      <>
        <Flex direction="column" gap="2xl">
          <Flex gap={3}>
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
};
