import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon20More } from '@vkontakte/icons';
import { noop } from '@vkontakte/vkjs';
import { useArgs } from 'storybook/preview-api';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { getAvatarUrl } from '../../testing/mock';
import { createFieldWithPresets } from '../../testing/presets';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { ModalOutsideButton } from '../ModalOutsideButton/ModalOutsideButton';
import { Spacing } from '../Spacing/Spacing';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard } from './ModalCard';
import type { ModalCardProps } from './types';

const story: Meta<ModalCardProps> = {
  title: 'Modals/ModalCard',
  component: ModalCard,
  parameters: createStoryParameters('ModalCard', CanvasFullLayout, DisableCartesianParam, {
    background: 'linear-gradient(blue, pink)',
  }),
  argTypes: {
    icon: createFieldWithPresets({
      iconSizes: ['56'],
      additionalPresets: {
        Image: <Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />,
        Avatar: <Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />,
      },
      requiredIcons: ['Icon56MoneyTransferOutline', 'Icon56NotificationOutline'],
    }),
  },
  render: function Render(props) {
    const [, updateArg] = useArgs();
    return <ModalCard {...props} onClose={() => updateArg({ open: false })} />;
  },
  decorators: function UIController(Component) {
    const [, updateArg] = useArgs();
    return (
      <>
        <Button appearance="overlay" onClick={() => updateArg({ open: true })}>
          Открыть
        </Button>
        <Component />
      </>
    );
  },
  tags: ['Модальные окна'],
};

export default story;

type Story = StoryObj<ModalCardProps>;

export const Playground: Story = {
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Icon56MoneyTransferOutline',
    title: 'Отправляйте деньги друзьям, используя банковскую карту',
    description: 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.',
    actions: (
      <Button size="l" mode="primary" stretched onClick={noop}>
        Попробовать
      </Button>
    ),
  },
};

export const CardWithAvatar: Story = {
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Image',
    title: 'Добавить игру «Загадки детства» в меню?',
    description: 'Игра появится под списком разделов на экране меню и будет всегда под рукой.',
    actions: (
      <Button size="l" mode="primary" stretched onClick={noop}>
        Добавить в меню
      </Button>
    ),
  },
};

export const CardWithTextArea: Story = {
  args: {
    id: 'modal-card',
    open: true,
    title: 'Расскажите о себе',
    description: 'Игра появится под списком разделов на экране меню и будет всегда под рукой.',
    actions: (
      <Button size="l" mode="primary" stretched onClick={noop}>
        Сохранить
      </Button>
    ),
    children: (
      <>
        <Spacing size="m" />
        <Textarea defaultValue="В Грузии" />
      </>
    ),
  },
};

export const CardWithMultipleButtons: Story = {
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Icon56NotificationOutline',
    title: 'Приложение запрашивает разрешение на отправку Вам уведомлений',
    actions: (
      <ButtonGroup stretched>
        <Button key="deny" size="l" mode="secondary" stretched onClick={noop}>
          Запретить
        </Button>
        <Button key="allow" size="l" mode="primary" stretched onClick={noop}>
          Разрешить
        </Button>
      </ButtonGroup>
    ),
  },
};

export const CardWithComplexContent: Story = {
  args: {
    id: 'modal-card',
    open: true,
    icon: 'Avatar',
    title: 'Баскетбол на выходных',
    titleComponent: 'h2',
    description: 'Приглашение в беседу',
    descriptionComponent: 'span',
    actions: (
      <React.Fragment>
        <Spacing size={8} />
        <ButtonGroup gap="s" mode="vertical" stretched>
          <Button key="join" size="l" mode="primary" stretched onClick={noop}>
            Присоединиться
          </Button>
          <Button key="copy" size="l" mode="secondary" stretched onClick={noop}>
            Скопировать приглашение
          </Button>
        </ButtonGroup>
      </React.Fragment>
    ),
    outsideButtons: (
      <ModalOutsideButton aria-label="More" onClick={noop}>
        <Icon20More />
      </ModalOutsideButton>
    ),
    children: (
      <>
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
      </>
    ),
  },
};
