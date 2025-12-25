'use client';
/* eslint-disable no-console, import/no-default-export */

import { useRef } from 'react';
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
  type CustomModalProps,
  type OpenModalCardProps,
  type OpenModalPageProps,
  type UseModalManagerProps,
} from './types';
import { useModalManager } from './useModalManager';

const story: Meta<UseModalManagerProps> = {
  title: 'Utils/useModalManager',
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<UseModalManagerProps>;

const ModalCardComponent = ({
  close,
  update,
  openNextModal,
  modalProps,
  modalNumber,
}: CustomModalProps<
  OpenModalCardProps,
  { openNextModal: (type: 'card' | 'page') => void; modalNumber: number }
>) => {
  return (
    <ModalCard
      icon={<Icon56NotificationOutline />}
      title={`#${modalNumber} Modal Card Title`}
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
      {...modalProps}
    >
      <FormItem top="Заголовок модалки">
        <Input
          defaultValue={`#${modalNumber} Modal Card Title`}
          onChange={(e) => update({ title: e.target.value })}
        />
      </FormItem>
    </ModalCard>
  );
};

const ModalPageComponent = ({
  openNextModal,
  close,
  modalProps,
  modalNumber,
}: CustomModalProps<
  OpenModalPageProps,
  { openNextModal: (type: 'card' | 'page') => void; modalNumber: number }
>) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    <ModalPage
      header={
        <ModalPageHeader
          before={
            viewWidth.smallTabletMinus &&
            platform === 'android' && (
              <PanelHeaderClose
                className={viewWidth.smallTabletMinus.className}
                onClick={() => close()}
              />
            )
          }
          after={
            viewWidth.smallTabletMinus &&
            platform === 'ios' && (
              <PanelHeaderButton
                onClick={() => close()}
                className={viewWidth.smallTabletMinus.className}
              >
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        >
          #{modalNumber} Dynamic modal
        </ModalPageHeader>
      }
      {...modalProps}
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
    const [api, contextHolder] = useModalManager(props);
    const modalCount = useRef(0);

    const openCustomModal = (type: 'card' | 'page') => {
      modalCount.current += 1;
      const count = modalCount.current;

      if (type === 'card') {
        api.openCustomModalCard({
          component: ModalCardComponent,
          additionalProps: {
            openNextModal: openCustomModal,
            modalNumber: count,
          },
        });
      } else {
        api.openCustomModalPage({
          component: ModalPageComponent,
          additionalProps: {
            openNextModal: openCustomModal,
            modalNumber: count,
          },
        });
      }
    };

    return (
      <>
        <Flex direction="column" gap="m">
          <Checkbox defaultChecked onChange={(e) => api.setSaveHistory(e.target.checked)}>
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
