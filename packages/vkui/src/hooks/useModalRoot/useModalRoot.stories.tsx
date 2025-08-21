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
import { ModalCard } from '../../components/ModalCard/ModalCard';
import { ModalPage } from '../../components/ModalPage/ModalPage';
import { ModalPageHeader } from '../../components/ModalPageHeader/ModalPageHeader';
import { PanelHeaderButton } from '../../components/PanelHeaderButton/PanelHeaderButton';
import { PanelHeaderClose } from '../../components/PanelHeaderClose/PanelHeaderClose';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { useAdaptivityConditionalRender } from '../useAdaptivityConditionalRender';
import { usePlatform } from '../usePlatform';
import {
  type OpenModalCardProps,
  type OpenModalComponentsProps,
  type OpenModalPageProps,
  type UseModalRootProps,
} from './types';
import { useModalRoot } from './useModalRoot';

const story: Meta<UseModalRootProps> = {
  title: 'Modals/useModalRoot',
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<UseModalRootProps>;

const ModalCardComponent = ({
  close,
  update,
  openNextModal,
  ...restProps
}: OpenModalComponentsProps<
  OpenModalCardProps,
  { openNextModal: (type: 'card' | 'page') => void }
>) => {
  return (
    <ModalCard
      icon={<Icon56NotificationOutline />}
      title="Modal Card Title"
      actions={
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
      }
      {...restProps}
    >
      <FormItem top="Заголовок модалки">
        <Input
          defaultValue="Modal Card Title"
          onChange={(e) => update({ title: e.target.value })}
        />
      </FormItem>
    </ModalCard>
  );
};

const ModalPageComponent = ({
  openNextModal,
  close,
  update,
  ...restProps
}: OpenModalComponentsProps<
  OpenModalPageProps,
  { openNextModal: (type: 'card' | 'page') => void }
>) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <ModalPage
      header={
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
      }
      {...restProps}
    >
      <Group>
        <CellButton onClick={() => openNextModal('page')}>Open ModalPage</CellButton>
        <CellButton onClick={() => openNextModal('card')}>Open ModalCard</CellButton>
      </Group>
    </ModalPage>
  );
};

export const Playground: Story = {
  render: function Render(props) {
    const [api, contextHolder] = useModalRoot(props);
    const [saveHistory, setSaveHistory] = React.useState(true);

    const openCustomModal = (type: 'card' | 'page') => {
      let modalId = '';
      const openNextModal = (type: 'card' | 'page') => {
        if (!saveHistory && modalId) {
          api.close(modalId);
        }
        openCustomModal(type);
      };

      if (type === 'card') {
        const { id } = api.openCustomModal('card', {
          component: ModalCardComponent,
          props: {
            openNextModal,
          },
        });
        modalId = id;
      } else {
        const { id } = api.openCustomModal('page', {
          component: ModalPageComponent,
          props: {
            openNextModal,
          },
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
          <Button appearance="overlay" onClick={() => openCustomModal('page')}>
            Открыть ModalPage
          </Button>
          <Button appearance="overlay" onClick={() => openCustomModal('card')}>
            Открыть ModalCard
          </Button>
        </Flex>
        {contextHolder}
      </>
    );
  },
};
