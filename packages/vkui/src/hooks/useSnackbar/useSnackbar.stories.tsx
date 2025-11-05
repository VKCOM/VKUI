'use client';

/* eslint-disable no-console, import/no-default-export */

import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon24ThumbsUpOutline } from '@vkontakte/icons';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Flex } from '../../components/Flex/Flex';
import { useSnackbar, type UseSnackbar } from '../../hooks/useSnackbar';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { type SnackbarPlacement, type SnackbarProps } from './types';

const story: Meta<UseSnackbar.Parameters> = {
  title: 'Utils/useSnackbar',
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    maxSnackbarsCount: {
      control: 'number',
    },
    queueStrategy: {
      control: 'radio',
      options: ['queue', 'shift'],
    },
    verticalOffsetTop: {
      control: 'number',
    },
    verticalOffsetBottom: {
      control: 'number',
    },
  },
};

export default story;

type Story = StoryObj<UseSnackbar.Parameters>;

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
    const [snackbarApi, contextHolder] = useSnackbar(props);
    const [snackbars, setSnackbars] = React.useState<Set<string>>(new Set());
    const [autoHide, setAutoHide] = React.useState(true);

    const _onOpen = (placement: SnackbarPlacement) => {
      const { id } = snackbarApi.open({
        duration: autoHide ? undefined : null,
        before: <Icon24ThumbsUpOutline />,
        placement,
        action: 'Поделиться',
        children: 'Этот сервис рекомендует один друг',
        onClose: () => {
          setSnackbars((oldState) => {
            oldState.delete(id);
            return new Set([...oldState]);
          });
        },
      });
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
