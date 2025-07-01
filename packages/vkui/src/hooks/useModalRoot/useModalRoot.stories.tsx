'use client';
/* eslint-disable no-console, import/no-default-export */

import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import { Icon24Dismiss, Icon56NotificationOutline } from '@vkontakte/icons';
import { Button } from '../../components/Button/Button';
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup';
import { CellButton } from '../../components/CellButton/CellButton';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Flex } from '../../components/Flex/Flex';
import { FormItem } from '../../components/FormItem/FormItem';
import { Group } from '../../components/Group/Group';
import { Input } from '../../components/Input/Input';
import { ModalPageHeader } from '../../components/ModalPageHeader/ModalPageHeader';
import { PanelHeaderButton } from '../../components/PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../../components/PanelHeaderClose/PanelHeaderClose';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useAdaptivityConditionalRender } from '../useAdaptivityConditionalRender';
import { usePlatform } from '../usePlatform';
import { type UseModalRootProps } from './types';
import { useModalRoot } from './useModalRoot';

const story: Meta<UseModalRootProps> = {
  title: 'Modals/useModalRoot',
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<UseModalRootProps>;

export const Playground: Story = {
  render: function Render(props) {
    const [api, contextHolder] = useModalRoot(props);
    const [saveHistory, setSaveHistory] = React.useState(true);

    const platform = usePlatform();
    const { sizeX } = useAdaptivityConditionalRender();

    const openModal = (type: 'card' | 'page') => {
      let modalId = '';
      const openNextModal = (type: 'card' | 'page') => {
        if (!saveHistory && modalId) {
          api.close(modalId);
        }
        openModal(type);
      };

      if (type === 'card') {
        const { close, id, update } = api.openCard({
          icon: <Icon56NotificationOutline />,
          title: 'Modal Card Title',
          children: (
            <>
              <FormItem top="Заголовок модалки">
                <Input
                  defaultValue="Modal Card Title"
                  onChange={(e) => update({ title: e.target.value })}
                />
              </FormItem>
            </>
          ),
          actions: (
            <ButtonGroup stretched mode="vertical">
              <Button size="l" mode="primary" stretched onClick={() => openNextModal('page')}>
                Открыть ModalPage
              </Button>
              <Button size="l" mode="primary" stretched onClick={() => openNextModal('card')}>
                Открыть ModalCard
              </Button>
              <Button size="l" mode="secondary" stretched onClick={() => close()}>
                Закрыть
              </Button>
            </ButtonGroup>
          ),
        });
        modalId = id;
      } else {
        const { close, id } = api.openPage({
          header: (
            <ModalPageHeader
              before={
                sizeX.compact &&
                platform === 'android' && (
                  <PanelHeaderClose className={sizeX.compact.className} onClick={() => close()} />
                )
              }
              after={
                sizeX.compact &&
                platform === 'ios' && (
                  <PanelHeaderButton onClick={() => close()} className={sizeX.compact.className}>
                    <Icon24Dismiss />
                  </PanelHeaderButton>
                )
              }
            >
              Dynamic modal
            </ModalPageHeader>
          ),
          children: (
            <Group>
              <CellButton onClick={() => openNextModal('page')}>Open ModalPage</CellButton>
              <CellButton onClick={() => openNextModal('card')}>Open ModalCard</CellButton>
            </Group>
          ),
        });
        modalId = id;
      }
    };

    return (
      <>
        <Flex direction="column" gap="m">
          <Checkbox checked={saveHistory} onChange={(e) => setSaveHistory(e.target.checked)}>
            Сохранять историю открытия
          </Checkbox>
          <Button appearance="overlay" onClick={() => openModal('page')}>
            Открыть ModalPage
          </Button>
          <Button appearance="overlay" onClick={() => openModal('card')}>
            Открыть ModalCard
          </Button>
        </Flex>
        {contextHolder}
      </>
    );
  },
};
