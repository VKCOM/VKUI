import ModalCard, { ModalCardProps } from './ModalCard';
import Button from '../Button/Button';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import AppRoot from '../AppRoot/AppRoot';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';
import { Platform } from '../../lib/platform';
import { ViewWidth } from '../../components/AdaptivityProvider/AdaptivityContext';

const Component = (props: ModalCardProps) => (
  <div style={{ height: 800 }}>
    <ModalRoot activeModal="test">
      <ModalCard nav="test" {...props} />
    </ModalRoot>
  </div>
);

const propSets = [{
  icon: [<Icon56MoneyTransferOutline key="icon" />],
  header: ['Отправляйте деньги друзьям, используя банковскую карту'],
  subheader: ['Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
  actions: [
    <Button size="l" mode="primary" key="button">
      Попробовать
    </Button>,
  ],
}];

describe('ModalCard for ios and android', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    adaptivity: {
      viewWidth: ViewWidth.MOBILE,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard for ios and android tablets', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    adaptivity: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
    platforms: [Platform.IOS, Platform.ANDROID],
  });
});

describe('ModalCard for vkcom', () => {
  describeScreenshotFuzz<ModalCardProps>(Component, propSets, {
    Wrapper: AppRoot,
    platforms: [Platform.VKCOM],
  });
});
