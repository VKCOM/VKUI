import * as React from 'react';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { SizeType, ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { HasChildren } from '../../types';
import { AppRoot } from '../AppRoot/AppRoot';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Image } from '../Image/Image';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { Textarea } from '../Textarea/Textarea';
import { UsersStack } from '../UsersStack/UsersStack';
import { ModalCard, ModalCardProps } from './ModalCard';

const AppWrapper = (props: HasChildren) => (
  <AppRoot mode="embedded" scroll="contain">
    {props.children}
  </AppRoot>
);

const Component = (props: ModalCardProps) => (
  <div style={{ height: 500, transform: 'translateZ(0)' }}>
    <ModalRoot activeModal={props.nav}>
      <ModalCard {...props} />
    </ModalRoot>
  </div>
);

const propSets = [
  {
    nav: ['1'],
    icon: [<Icon56MoneyTransferOutline key="icon" />],
    header: ['Отправляйте деньги друзьям, используя банковскую карту'],
    subheader: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
    actions: [
      <Button size="l" mode="primary" stretched key="button">
        Попробовать
      </Button>,
    ],
  },
  {
    nav: ['2'],
    icon: [<Image key="image" size={72} borderRadius="l" />],
    header: ['Добавить игру «Загадки детства» в меню?'],
    subheader: ['Игра появится под списком разделов на экране меню и будет всегда под рукой.'],
    actions: [
      <ButtonGroup mode="vertical" gap="m" stretched key="buttons">
        <Button size="l" mode="primary" stretched>
          Присоединиться
        </Button>
        <Button size="l" mode="secondary" stretched>
          Скопировать приглашение
        </Button>
      </ButtonGroup>,
    ],
    children: [
      <UsersStack
        photos={['', '', '', '']}
        size="l"
        visibleCount={3}
        key="usersstack"
        layout="vertical"
      >
        Алексей, Илья, Михаил
        <br />и ещё 3 человека
      </UsersStack>,
    ],
  },
  {
    nav: ['3'],
    header: ['Расскажите о себе'],
    actions: [
      <Button size="l" mode="primary" stretched key="button">
        Сохранить
      </Button>,
    ],
    children: [<Textarea key="textarea" defaultValue="В Грузии" />],
  },
  {
    nav: ['4'],
    header: ['Гиппопотомомонстросесквиппедалиофобия'],
    subheader: [
      'Гиппопотомомонстросесквиппедалиофобия — боязнь длинных слов, таких как метоксихлордиэтиламинометилбутиламиноакридин',
    ],
    actions: [
      <ButtonGroup mode="horizontal" gap="s" stretched key="buttons">
        <Button size="l" mode="primary" stretched>
          Гиппопотомомонстросесквиппедалиофобия
        </Button>
        <Button size="l" mode="primary" stretched>
          Метоксихлордиэтиламинометилбутиламиноакридин
        </Button>
      </ButtonGroup>,
    ],
  },
];

describe('ModalCard mobile', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppWrapper,
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
      sizeY: SizeType.REGULAR,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard tablet', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppWrapper,
    adaptivity: {
      viewWidth: ViewWidth.SMALL_TABLET,
      sizeY: SizeType.COMPACT,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppWrapper,
    platforms: [Platform.VKCOM],
  });
});
