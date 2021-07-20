import ModalCard, { ModalCardProps } from './ModalCard';
import Button from '../Button/Button';
import { ModalRoot } from '../ModalRoot/ModalRootAdaptive';
import { SplitLayout } from '../SplitLayout/SplitLayout';
import { describeScreenshotFuzz } from '../../testing/e2e/utils';
import AppRoot from '../AppRoot/AppRoot';
import { Icon56MoneyTransferOutline } from '@vkontakte/icons';

describe('ModalCard', () => {
  describeScreenshotFuzz<ModalCardProps>((props) => (
    <SplitLayout
      modal={
        <ModalRoot activeModal="test">
          <ModalCard nav="test" {...props} />
        </ModalRoot>
      }
    />
  ), [{
    icon: [undefined, <Icon56MoneyTransferOutline key="icon" />],
    header: [undefined, 'Отправляйте деньги друзьям, используя банковскую карту'],
    subheader: [undefined, 'Номер карты получателя не нужен — он сам решит, куда зачислить средства.'],
    actions: [undefined,
      <Button size="l" mode="primary" key="button">
        Попробовать
      </Button>,
    ],
    $adaptivity: 'x',
  }], {
    Wrapper: AppRoot,
  });
});
