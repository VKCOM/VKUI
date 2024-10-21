import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon56MoneyTransferOutline, Icon56NotificationOutline } from '@vkontakte/icons';
import { ModalWrapper } from '../../storybook/ModalWrapper';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard, type ModalCardProps } from './ModalCard';

const story: Meta<ModalCardProps> = {
  title: 'Modals/ModalCard',
  component: ModalCard,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

type Story = StoryObj<ModalCardProps>;

const MODAL_CARD_MONEY_SEND = 'money-send';
const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
const MODAL_CARD_ABOUT = 'say-about';
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const MODAL_CARD_CHAT_INVITE = 'chat-invite';

export const SimpleCard: Story = {
  render: () => (
    <ModalWrapper modalId={MODAL_CARD_MONEY_SEND}>
      <ModalCard
        id={MODAL_CARD_MONEY_SEND}
        icon={<Icon56MoneyTransferOutline />}
        title="Отправляйте деньги друзьям, используя банковскую карту"
        description="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
        actions={
          <Button size="l" mode="primary" stretched>
            Попробовать
          </Button>
        }
      />
    </ModalWrapper>
  ),
};

export const CardWithAvatar: Story = {
  render: () => (
    <ModalWrapper modalId={MODAL_CARD_APP_TO_MENU}>
      <ModalCard
        id={MODAL_CARD_APP_TO_MENU}
        icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
        title="Добавить игру «Загадки детства» в меню?"
        description="Игра появится под списком разделов на экране меню и будет всегда под рукой."
        actions={
          <Button size="l" mode="primary" stretched>
            Добавить в меню
          </Button>
        }
      />
    </ModalWrapper>
  ),
};

export const CardWithTextArea: Story = {
  render: () => (
    <ModalWrapper modalId={MODAL_CARD_ABOUT}>
      <ModalCard
        id={MODAL_CARD_ABOUT}
        title="Расскажите о себе"
        actions={
          <Button size="l" mode="primary" stretched>
            Сохранить
          </Button>
        }
      >
        <Textarea defaultValue="В Грузии" />
      </ModalCard>
    </ModalWrapper>
  ),
};

export const CardWithMultipleButtons: Story = {
  render: () => (
    <ModalWrapper modalId={MODAL_CARD_NOTIFICATIONS}>
      <ModalCard
        id={MODAL_CARD_NOTIFICATIONS}
        icon={<Icon56NotificationOutline />}
        title="Приложение запрашивает разрешение на отправку Вам уведомлений"
        actions={
          <ButtonGroup stretched>
            <Button key="deny" size="l" mode="secondary" stretched>
              Запретить
            </Button>
            <Button key="allow" size="l" mode="primary" stretched>
              Разрешить
            </Button>
          </ButtonGroup>
        }
      />
    </ModalWrapper>
  ),
};

export const CardWithComplexContent: Story = {
  render: () => (
    <ModalWrapper modalId={MODAL_CARD_CHAT_INVITE}>
      <ModalCard
        id={MODAL_CARD_CHAT_INVITE}
        icon={<Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />}
        title="Баскетбол на выходных"
        titleComponent="h2"
        description="Приглашение в беседу"
        descriptionComponent="span"
        actions={
          <React.Fragment>
            <Spacing size={8} />
            <ButtonGroup gap="s" mode="vertical" stretched>
              <Button key="join" size="l" mode="primary" stretched>
                Присоединиться
              </Button>
              <Button key="copy" size="l" mode="secondary" stretched>
                Скопировать приглашение
              </Button>
            </ButtonGroup>
          </React.Fragment>
        }
      >
        <Spacing size={20} />
        <UsersStack
          photos={[
            getAvatarUrl('user_mm'),
            getAvatarUrl('user_ilyagrshn'),
            getAvatarUrl('user_lihachyov'),
            getAvatarUrl('user_wayshev'),
            getAvatarUrl('user_arthurstam'),
            getAvatarUrl('user_xyz'),
          ]}
          size="l"
          visibleCount={3}
          avatarsPosition="block-start"
        >
          Алексей, Илья, Михаил
          <br />и ещё 3 человека
        </UsersStack>
      </ModalCard>
    </ModalWrapper>
  ),
};
