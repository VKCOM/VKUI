import { Fragment } from 'react';
import ModalCard, { ModalCardProps } from './ModalCard';
import Button from '../Button/Button';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import Avatar from '../Avatar/Avatar';
import UsersStack from '../UsersStack/UsersStack';
import Textarea from '../Textarea/Textarea';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import AppRoot from '../AppRoot/AppRoot';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { ViewWidth } from '../../components/AdaptivityProvider/AdaptivityContext';

const Component = (props: ModalCardProps) => (
  <div style={{ height: 500, transform: 'translateZ(0)' }}>
    <ModalRoot activeModal={props.nav}>
      <ModalCard {...props} />
    </ModalRoot>
  </div>
);

const propSets = [{
  nav: ['1'],
  icon: [<Icon56MoneyTransferOutline key="icon" />],
  header: ['Отправляйте деньги друзьям, используя банковскую карту'],
  subheader: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
  actions: [
    <Button size="l" mode="primary" key="button">
      Попробовать
    </Button>,
  ],
}, {
  nav: ['2'],
  icon: [<Avatar key="avatar" mode="app" size={72} />],
  header: ['Добавить игру «Загадки детства» в меню?'],
  subheader: ['Игра появится под списком разделов на экране меню и будет всегда под рукой.'],
  actionsLayout: ['vertical' as ModalCardProps['actionsLayout']],
  actions: [
    <Fragment key="buttons">
      <Button size="l" mode="primary">
        Присоединиться
      </Button>
      <Button size="l" mode="secondary">
        Скопировать приглашение
      </Button>
    </Fragment>,
  ],
  children: [
    <UsersStack
      photos={[undefined, undefined, undefined, undefined]}
      size="m"
      visibleCount={3}
      key="usersstack"
      layout="vertical"
    >Алексей, Илья, Михаил<br />и ещё 3 человека</UsersStack>,
  ],
}, {
  nav: ['3'],
  header: ['Расскажите о себе'],
  actions: [
    <Button size="l" mode="primary" key="button">
      Сохранить
    </Button>,
  ],
  children: [
    <Textarea key="textarea" defaultValue="В Грузии" />,
  ],
}];

describe('ModalCard mobile', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard tablet', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    adaptivity: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    platforms: [Platform.VKCOM],
  });
});
